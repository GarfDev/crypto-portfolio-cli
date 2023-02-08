import { AxiosRequestConfig } from "axios";

export type IRequester = (config: AxiosRequestConfig) => any;