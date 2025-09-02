import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/", // <-- your GitHub repo name
  plugins: [react()],
});