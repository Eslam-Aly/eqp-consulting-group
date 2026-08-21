import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const outputDirectory = new URL("../dist/vercel/", import.meta.url);
const clientDirectory = new URL("../dist/client/", import.meta.url);
const workerUrl = pathToFileURL(
  fileURLToPath(new URL("../dist/server/index.js", import.meta.url)),
);
workerUrl.searchParams.set("export", `${Date.now()}`);

process.env.VERCEL_PROJECT_PRODUCTION_URL = "eqp-consulting-group.vercel.app";
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://eqp-consulting-group.vercel.app/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static export failed with status ${response.status}`);
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });
await writeFile(new URL("index.html", outputDirectory), await response.text());
