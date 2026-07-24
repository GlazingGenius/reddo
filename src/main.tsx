import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);