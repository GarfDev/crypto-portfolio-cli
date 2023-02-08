import { Op } from "sequelize";
import { TRANSACTION_TYPE } from "../constants/transactionType";
import Transaction from "../models/transaction.model";
import { START_OF_TIME } from "../constants/startOfTime";

const TransactionService = {
  tokens: async (): Promise<string[]> => {
    const data: { DISTINCT: string }[] = await Transaction.aggregate(
      "token",
      "DISTINCT",
      { plain: false }
    );
    return data.map((item) => item["DISTINCT"]);
  },

  total: async (token: string, type: TRANSACTION_TYPE, date?: Date) => {
    const dateQuery = date
      ? { timestamp: {[Op.between] : [START_OF_TIME , date ]} }
      : {};

    return await Transaction.sum("amount", {
      where: { [Op.and]: { token, transaction_type: type }, ...dateQuery },
    });
  },
};

export default TransactionService;
