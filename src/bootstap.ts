import chalk from "chalk";
import sequelize from "./configs/sequelize";
import CurrencyController from "./controllers/currency.controller";
import LoadController from "./controllers/loader.controller";
import { IResponse } from "./types";

const bootstrap = async () => {
  let response: IResponse | null = null;
  const args = process.argv.splice(2);

  require("./models/transaction.model");

  await sequelize.sync({});

  if (!args[0]) {
    response = await CurrencyController.statictic();
  } else {
    switch (args[0]) {
      case "load": {
        response = await LoadController.load(args[1]);
        break;
      }
      default: {
        const isDate = Date.parse(args[0]);
        if (isDate) {
          response = await CurrencyController.statictic(args[0]);
        } else {
          response = await CurrencyController.read(args[0]);
        }
      }
    }
  }

  if (response.message === "{}")
    return console.log(
      chalk.red(
        "There not yet any portfolio data, please load your CSV file using `portfolio-cli load :path_to_csv_file:` command"
      )
    );

  if (!response) return console.log(chalk.red("Invalid Paramaters"));

  return console.log(chalk[response.type](response.message));
};

export default bootstrap;
