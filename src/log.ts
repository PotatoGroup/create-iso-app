import chalk from "chalk";
const log = (dest: string) => {
  console.log(`
    ${chalk.yellow("Next Step:")}\n
      ${chalk.cyan("cd")} ${chalk.greenBright(dest)}
      ${chalk.cyan("yarn")}
      ${chalk.cyan("yarn build")}
      ${chalk.cyan("yarn start")}
`);
};

export default log;
