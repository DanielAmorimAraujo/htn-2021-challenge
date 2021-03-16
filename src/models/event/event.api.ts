import { Api } from "models/api";
import { Event, TEvent } from ".";

const BASE_URL =
  "graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }";

export const EventApi = {
  /**
   * Gets all events
   *
   * @returns list of events
   */
  async getAll(): Promise<Event[]> {
    const data = await Api.get<TEvent[]>(BASE_URL);
    const events = data.map((d) => new Event(d));
    return events;
  },
};
