import path from "node:path";
import CSVLoaderManager from "../managers/CSVLoadManager";
import { IResponse } from "../types";

const load = async (filePath?: string): Promise<IResponse> => {
  if (!filePath)
    return {
      type: "red",
      message: "This is not a valid file path",
    };

  const extension = path.extname(filePath);
  switch (extension) {
    case ".csv": {
      const loader = new CSVLoaderManager();
      await loader.load(filePath);
      await loader.read();

      return {
        type: "green",
        message:
          "Successfully read your CSV file, please continue with your previous command",
      };
    }
    default: {
      return {
        type: "red",
        message:
          "Your file extension is not yet supported, please inform me though email: garfdev.13@gmail.com",
      };
    }
  }
};

export default { load };
