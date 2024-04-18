import updateNotifier from "update-notifier-cjs";
import chalk from "chalk";
import packageJson from "../package.json";
const checkUpdate = () => {
  const notifier = updateNotifier({ pkg: packageJson }).notify();
  if (notifier.update) {
    console.log(
      "\n",
      chalk.yellowBright(`${notifier.update.latest} 版本已发布，请升级`)
    );
  }
};

export default checkUpdate;
