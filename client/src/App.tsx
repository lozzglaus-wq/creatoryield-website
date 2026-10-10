import Home from "./pages/Home";
import { Brand } from "./components/creatoryield/Brand";

export default function App() {
  if (typeof window !== "undefined" && window.location.pathname !== "/") {
    return (
      <div className="not-found shell">
        <Brand />
        <h1>This page isn’t here.</h1>
        <p>Let’s get you back to the right place.</p>
        <a className="action" href="/">
          Back to CreatorYield
        </a>
      </div>
    );
  }
  return <Home />;
}
