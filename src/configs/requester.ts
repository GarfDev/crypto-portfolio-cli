import { AxiosRequestConfig } from "axios";
import axios from './axios'

const requester = async (config: AxiosRequestConfig) => {
    const response = await axios(config)
    return response.data
};

export default requester