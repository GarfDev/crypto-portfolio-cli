import { DataTypes, Model } from "sequelize";
import sequelize from "../configs/sequelize";

class Transaction extends Model {}

Transaction.init(
  {
    timestamp: { type: DataTypes.DATE, allowNull: false },
    transaction_type: { type: DataTypes.STRING, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
  },
  {
    sequelize,
    modelName: "transactions",
  }
);

export default Transaction;
