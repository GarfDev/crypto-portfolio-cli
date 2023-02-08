import { AxiosRequestConfig } from "axios";
import { IRequester } from "../types/IRequester";

class RequestManager {
  _requester: IRequester;

  constructor(requester: IRequester) {
    this._requester = requester;
  }

  get requester() {
    return this._requester;
  }
}

export default RequestManager;
