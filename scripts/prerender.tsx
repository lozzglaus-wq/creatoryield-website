import { readFileSync, writeFileSync } from "node:fs";
import { renderToString } from "react-dom/server";
import Home from "../client/src/pages/Home";

const file = "dist/public/index.html";
const template = readFileSync(file, "utf8");
if (!template.includes("<!--app-html-->"))
  throw new Error("Page rendering marker is missing");
writeFileSync(
  file,
  template.replace("<!--app-html-->", renderToString(<Home />))
);
console.log("CreatorYield public content rendered into initial HTML.");
