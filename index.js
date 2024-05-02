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
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
// Asked Player name & Opponent Select
async function startGame() {
    let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please Enter Your Name:"
    });
    let opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Assassin", "Zombie"]
    });
    let p1 = new Player(player.name);
    let o1 = new Player(opponent.select);
    do {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Move:",
            choices: ["Attack", "Drink Potion", "Run for your life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
                    process.exit();
                }
            }
            else {
                o1.fuelDecrease();
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.red.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Potion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`You Drink Health Potion. Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life..") {
            console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
            process.exit();
        }
    } while (true);
}
startGame();
