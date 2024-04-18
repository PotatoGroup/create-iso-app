import { readJsonSync, writeJsonSync, writeFileTextSync } from "extra-fs";
import { join } from "path";
import { execSync, spawnSync } from "child_process";

const getReadme = (name: string) => {
  return `
# ${name}

Server-side rendering architecture based on React and Express, supporting:

- router-config: react-router-dom
- style manage: mini-css-extract-plugin, isomorphic-style-loader
- state manage: redux, redux-thunk
- dynamic load：lazy, react-loadable, renderToPipeableStream
- spiteChunk：code-splitting
- HMR：hot-reload
- Auth: JWT
- and so on...

## Start

\`\`\`ts
yarn
yarn build
yarn start
\`\`\`

    `;
};

const getDockerFile = () => {
  const user = execSync("git config --global user.name");
  const email = execSync("git config --global user.email");
  return `
FROM node:18.12.1-alpine

LABEL author="${user.toString().replace(/\n$/, "")}"

LABEL email="${email.toString().replace(/\n$/, "")}"

COPY . /app

WORKDIR /app

CMD node dist/server/index.js
  `;
};

const updatePro = (name: string) => {
  /**
   * update pkg-name
   */
  const directory = join(process.cwd(), name ?? "");
  const pkgPath = join(directory, "package.json");
  const json = readJsonSync(pkgPath);
  json.name = name;
  json.version = "0.0.1";
  writeJsonSync(pkgPath, json);

  /**
   * update README
   */
  const readmePath = join(directory, "README.md");
  writeFileTextSync(readmePath, getReadme(name));

  /**
   * update dockerfile
   */
  const dockerPath = join(directory, "dockerfile");
  writeFileTextSync(dockerPath, getDockerFile());

  return name;
};

export default updatePro;
