import chalk from "chalk";
const log = (dest: string) => {
  console.log(`${chalk.green("Create Success!")}
  
    ${chalk.yellow("Next Step:")}
    ${chalk.cyan("cd")} ${chalk.greenBright(dest)}
    ${chalk.cyan("yarn")}
    ${chalk.cyan("yarn build")}
`);
};

export default log;
