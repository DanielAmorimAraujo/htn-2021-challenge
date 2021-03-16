import axios from "axios";
import config from "library/config.json";

/**
 * Wraps the API communication
 */
export const Api = {
  /**
   * Make a get request
   *
   * @param path - the path to request
   * @returns The API response
   */
  async get<T = unknown>(path: string): Promise<T> {
    try {
      const resp = await axios.get<{ data: { [key: string]: T } }>(
        config.API_URL + path,
        { timeout: config.API_REQUEST_TIMEOUT }
      );
      return resp.data.data[Object.keys(resp.data.data)[0]];
    } catch (error) {
      // connection timeout
      throw new Error("API error.");
    }
  },
};
