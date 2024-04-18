import { Command } from "commander";
import downloadRepo from "./download-repo";
import packageJson from "../package.json";
import updatePro from "./updatePro";
import log from "./log";
import checkUpdate from "./checkUpdate";
import compose from "./compose";

const program = new Command();

program
  .description("创建react ssr app")
  .version(packageJson.version)
  .argument("<dest>", "app name directory")
  .action((dest) => {
    compose(checkUpdate, log, updatePro, downloadRepo)(dest);
  });

program.parse(process.argv);
