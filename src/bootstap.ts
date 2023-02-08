import LoadController from "./controllers/loader.controller";
import CurrencyController from "./controllers/currency.controller";
import chalk from "chalk";
import { IResponse } from "./types";
import sequelize from "./configs/sequelize";

const bootstrap = async () => {
  let response: IResponse | null = null;
  const args = process.argv.splice(2);

  require("./models/transaction.model");

  await sequelize.sync({});

  if (!args[0]) {
    response = await CurrencyController.statictic();
    return console.log(chalk[response.type](response.message));
  }

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

  if (!response) return console.log(chalk.red("Invalid Paramaters"));

  return console.log(chalk[response.type](response.message));
};

export default bootstrap;
