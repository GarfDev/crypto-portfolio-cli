import requester from "../configs/requester";
import RequestManager from "./RequestManager";

export default class ConvertManager extends RequestManager {
  constructor() {
    super(requester);
  }

  /**
   * Convert `from` currency to `to` currency
   * @param from Currency to convert
   * @param to Currency convert to
   * @param amount Amount to convert
   * @returns converted value
   */
  async convert(from: string, to: string, amount: number): Promise<string> {
    return "";
  }
}
