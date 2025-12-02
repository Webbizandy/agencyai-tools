import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Signal to pre-renderer that content is ready
if (typeof window !== 'undefined') {
  setTimeout(() => {
    const event = new Event('render-event');
    document.dispatchEvent(event);
  }, 100);
}
