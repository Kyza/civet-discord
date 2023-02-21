import esbuild from "esbuild";
import civetPlugin from "@danielx/civet/esbuild-plugin";

esbuild
  .build({
    entryPoints: ["src/index.civet", "src/autoUpdate.civet"],
    bundle: true,
    platform: "node",
    outdir: "dist",
    target: "node18",
    plugins: [civetPlugin],
    external: ["dotenv", "@danielx/civet", "discord.js", "prettier"],
  })
  .catch(() => process.exit(1));
