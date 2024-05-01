import chalk from "chalk";
import inquirer from "inquirer";
// Classes Player & Opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// Asked Player name & Opponent Select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Oppenent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// Gather Data
let p1 = new Player(player.name);
let o1 = new Player(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for your life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
        }
        if (ask.opt == "Run for your life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
        }
    }
} while (true);
