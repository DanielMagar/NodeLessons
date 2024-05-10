import chalk from "chalk";

console.log(chalk.blue("Hello Node JS"));
console.log(chalk.red("Hello Node JS"));
console.log(chalk.red("Hello Node JS"));
console.log(chalk.green(
    'I am a green line' + chalk.blue.underline.bold('with a blue substring') +
    'that becomes green again'
));