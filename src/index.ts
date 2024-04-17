import { Command } from "commander";
import downloadRepo from "./download-repo";
import packageJson from "../package.json";
import log from "./log";
const program = new Command();

program
  .description("创建react ssr app")
  .version(packageJson.version)
  .argument("<dest>", "app name directory")
  .action(async (dest) => {
    await downloadRepo(dest);
    log(dest);
  });

program.parse(process.argv);
