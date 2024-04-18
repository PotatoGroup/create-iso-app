import download from "download-git-repo";
import { join } from "path";
import ProgressBar from "progress";
import ora from "ora";
import chalk from "chalk";

const repo = "direct:https://github.com/ziluo-tang/react-ssr.git#main";
const progress = new ProgressBar("downloading...[:bar]:percent%", {
  total: 10,
  width: 100,
});

const downloadRepo = (dest?: string) => {
  const directory = join(process.cwd(), dest ?? "");
  const spinner = ora(`download template ...`).start();
  return new Promise((resolve, reject) => {
    download(repo, directory, { clone: true }, (err: Error) => {
      if (err) {
        console.error(
          chalk.red(`${err} \ntemplate download error, please retry...`)
        );
        reject(err);
      } else {
        spinner.succeed("download success\n");
        resolve(dest);
      }
    });
  });
};

export default downloadRepo;
