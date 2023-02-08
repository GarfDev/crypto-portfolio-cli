import { DataTypes, Model } from "sequelize";
import sequelize from "../configs/sequelize";

class Metadata extends Model {}

Metadata.init(
  {
    tokens: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  },
  {
    sequelize,
    modelName: "metadatas",
  }
);

export default Metadata;
