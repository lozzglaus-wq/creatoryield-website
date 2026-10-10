import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      if (url.split("?")[0] !== "/") {
        res
          .status(404)
          .set({ "Content-Type": "text/html", "X-Robots-Tag": "noindex" })
          .end(
            "<!doctype html><html lang='en'><head><title>Page not found | CreatorYield</title></head><body><h1>This page isn’t here.</h1><a href='/'>Back to CreatorYield</a></body></html>"
          );
        return;
      }
      const { default: Home } = await vite.ssrLoadModule("/src/pages/Home.tsx");
      res
        .status(200)
        .set({ "Content-Type": "text/html" })
        .end(
          page.replace("<!--app-html-->", renderToString(createElement(Home)))
        );
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    res
      .status(404)
      .set("X-Robots-Tag", "noindex")
      .type("html")
      .send(
        "<!doctype html><html lang='en'><head><title>Page not found | CreatorYield</title></head><body><h1>This page isn’t here.</h1><a href='/'>Back to CreatorYield</a></body></html>"
      );
  });
}
