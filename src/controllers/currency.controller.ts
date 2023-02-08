import { IResponse } from "./../types/IResponse";
import CryptoCompareConvertManager from "../managers/CryptoCompareManager";
import TransactionService from "../services/transaction.service";
import { TRANSACTION_TYPE } from "../constants/transactionType";

const converter = new CryptoCompareConvertManager();

const readToken = async (token: string, date?: Date): Promise<string> => {
  const deposit = await TransactionService.total(
    token,
    TRANSACTION_TYPE.DEPOSIT,
    date
  );
  const withdrawal = await TransactionService.total(
    token,
    TRANSACTION_TYPE.WITHDRAWAL,
    date
  );
  const amount = deposit - withdrawal;
  const convertedAmount = await converter.convert(token, "USD", amount);

  return convertedAmount;
};

const read = async (token: string): Promise<IResponse> => {
  const convertedToken = await readToken(token);

  return {
    type: "green",
    message: convertedToken,
  };
};

const statictic = async (dateStr?: string): Promise<IResponse> => {
  const date = dateStr ? new Date(dateStr) : new Date();

  const tokens = await TransactionService.tokens();

  const staticResponse: { [token: string]: string } = {};

  const promises = tokens.map(async (token) => {
    staticResponse[token] = await readToken(token, date);
  });
  await Promise.all(promises);

  return {
    type: "green",
    message: JSON.stringify(staticResponse),
  };
};

export default { read, statictic };
