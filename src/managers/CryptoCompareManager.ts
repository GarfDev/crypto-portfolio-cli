import { AxiosRequestConfig } from "axios";
import ConvertManager from "./ConvertManager";
import { CRYPTO_COMPARE_API_KEY } from "../configs/secrets";

/**
 * @extends RequestManager to make requests to external services
 * @extends ConvertManager uniform functions
 */
class CryptoCompareConvertManager extends ConvertManager {
  constructor() {
    super();
  }

  private async price(from: string, to: string): Promise<number> {
    const prices = await this.requester({
      url: "https://min-api.cryptocompare.com/data/price",
      params: { fsym: from, tsyms: to, relaxedValidation: true },
      headers: {
        authorization: `Apikey ${CRYPTO_COMPARE_API_KEY}`,
      },
    });
    return prices[to];
  }

  override async convert(
    from: string,
    to: string,
    amount: number
  ): Promise<string> {
    const price = await this.price(from, to);
    return (price * amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}

export default CryptoCompareConvertManager;
