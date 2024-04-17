import { Command } from "commander";
import downloadRepo from "./download-repo";
import packageJson from "../package.json";
import updateNotifier from "update-notifier-cjs";
import log from "./log";
import chalk from "chalk";
const program = new Command();

program
  .description("创建react ssr app")
  .version(packageJson.version)
  .argument("<dest>", "app name directory")
  .action(async (dest) => {
    const notifier = updateNotifier({ pkg: packageJson }).notify();
    await downloadRepo(dest);
    log(dest);
    if (notifier.update) {
      console.log(
        "\n",
        chalk.yellowBright(`${notifier.update.latest} 版本已发布，请升级`)
      );
    }
  });

program.parse(process.argv);
