import fs from "fs";
import { parse } from "csv-parse";
import Transaction from "../models/transaction.model";
import LoaderManager from "./LoadManager";
import { IMetadata } from "../types/IMetadata";

type Row = [string, string, string, string];

class CSVLoadManager extends LoaderManager<Row> {
  constructor() {
    super();
  }

  private async insert(row: Row) {
    await Transaction.create(
      {
        timestamp: new Date().setTime(Number(row[0])),
        transaction_type: row[1],
        token: row[2],
        amount: parseFloat(row[3]),
      },
      {}
    );
  }

  override async load(path: string): Promise<void> {
    this._readable = fs
      .createReadStream(path)
      .pipe(parse({ delimiter: ",", from_line: 2 }));
  }

  override async read(): Promise<IMetadata> {

    const tokens: { [key: string]: number } = {}

    const metadata = await new Promise<IMetadata>((resolve, reject) => {
      let chunk: Row;

      this._readable.on("readable", async () => {
        while ((chunk = this._readable.read()) != null) {
          console.log(chunk);
          tokens[chunk[2]] = 1;
          await this.insert(chunk);
        }

        this.insert(this._readable.read());
      });
      this._readable.on("end", () => resolve({ tokens: Object.keys(tokens) }));
      this._readable.on("error", (error) => reject(error));
    });

    return metadata;
  }
}

export default CSVLoadManager;
