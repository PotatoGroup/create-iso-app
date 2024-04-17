import download from "download-git-repo";
import { join } from "path";
import ProgressBar from "progress";

const repo = "direct:https://github.com/ziluo-tang/react-ssr.git#main";
const progress = new ProgressBar("downloading...[:bar]:percent%", {
  total: 10,
  width: 100,
});

export default (dest?: string) => {
  dest = join(process.cwd(), dest ?? "");
  return new Promise((resolve, reject) => {
    download(repo, dest, { clone: true }, (err: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};
