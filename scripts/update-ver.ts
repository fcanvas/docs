import fs from "fs"
import path from "path"

import fetch from "sync-fetch"

import pkg from "../package.json"

const { version } = fetch(
  "https://raw.githubusercontent.com/fcanvas/fcanvas/main/package.json"
).json()

if (!pkg.version.startsWith(`${version}.docs-`)) {
  fs.writeFileSync(
    path.join(__dirname, "..", "package.json"),
    JSON.stringify(
      {
        ...pkg,
        version
      },
      null,
      2
    ),
    "utf8"
  )
}
