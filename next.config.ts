import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true, // Opcional, mejora el desarrollo con advertencias adicionales.
  swcMinify: true, // Usa el compilador SWC para minimizar el código.
};

export default nextConfig;
