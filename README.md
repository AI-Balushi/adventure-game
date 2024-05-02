# Fuel Battle Game

Fuel Battle Game is a simple command-line game where you, as a player, engage in a battle of fuel against various opponents. The game is developed in TypeScript and uses inquirer for interactive command-line prompts.

## How to Play

1. **Start the Game**: Run the game using the command `npx @abdul_waheed/fuel-battle-game`.
2. **Enter Your Name**: Enter your name when prompted.
3. **Select Your Opponent**: Choose an opponent to battle against (Skeleton, Assassin, or Zombie).
4. **Battle Begins**: The battle begins with each turn allowing you to choose from three options:
   - **Attack**: Attack your opponent and reduce their fuel. You may win or lose based on a random outcome.
   - **Drink Potion**: Replenish your fuel by drinking a health potion.
   - **Run for your life..**: Choose to flee from the battle. Be cautious, as fleeing might lead to defeat.
5. **Win or Lose**: Keep battling until either you or your opponent runs out of fuel. If your fuel drops to zero, you lose the game. If your opponent's fuel drops to zero, you win!

## Technologies Used

- TypeScript
- Inquirer
- Chalk

## Installation

To install the game locally, use the following command:

```bash
npm install -g @abdul_waheed/fuel-battle-game
```

## Usage

To start the game, run the following command:

```bash
npx @abdul_waheed/fuel-battle-game
```

