import Stream from "stream";
import { IMetadata } from "../types/IMetadata";

/**
 * Manages methods to load and export data from file.
 * @abstract
 */
export default class LoadManager<DataType = any> {
  _readable: Stream.Readable;

  constructor() {
    this._readable = new Stream.Readable();
  }

  /**
   * This function will load file into interal Readable Stream object
   * @param path A string-like path that point to the file to read
   */
  async load(path: string): Promise<void> {}

  /**
   * This function call `callback` function while read the file and use data as input
   * @param fn a function that receive data from the internal Readable Stream
   */
  async read(callback: (data: DataType) => void): Promise<IMetadata> { return { tokens: [] } }
}
