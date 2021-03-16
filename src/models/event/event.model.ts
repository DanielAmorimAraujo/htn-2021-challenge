export type TEventType = "workshop" | "activity" | "tech_talk";
export type TPermission = "public" | "private";

export type TSpeaker = {
  name: string;
  profile_pic?: string; // a url to an image
};

export type TEvent = {
  id: number;
  name: string;
  event_type: TEventType;
  permission?: TPermission;

  start_time: number; // unix timestamp (ms)
  end_time: number; // unix timestamp (ms)

  description?: string; // a paragraph describing the event
  speakers: TSpeaker[]; // a list of speakers for the event

  public_url?: string; // a url to display for the general public
  private_url: string; // a url to display for hackers
  related_events: number[]; // a list ids corresponding to related events
};

/**
 * Representation of an event
 */
export class Event implements TEvent {
  id = 0;
  name = "";
  event_type: TEventType = "workshop";
  permission?: TPermission;
  start_time = 0;
  end_time = 0;
  description?: string;
  speakers: TSpeaker[] = [];
  public_url?: string;
  private_url = "";
  related_events: number[] = [];

  /**
   * Constructor
   *
   * @param data - the constructor data
   */
  constructor(data: TEvent) {
    this.set(data);
  }

  /**
   * Sets given data to the object
   *
   * @param data - the data to set
   */
  set(data: Partial<TEvent>): void {
    if (data.id) this.id = data.id;
    if (data.name) this.name = data.name;
    if (data.event_type) this.event_type = data.event_type;
    if (data.permission) this.permission = data.permission;
    if (data.start_time) this.start_time = data.start_time;
    if (data.end_time) this.end_time = data.end_time;
    if (data.description) this.description = data.description;
    if (data.speakers) this.speakers = data.speakers;
    if (data.public_url) this.public_url = data.public_url;
    if (data.private_url) this.private_url = data.private_url;
    if (data.related_events) this.related_events = data.related_events;
  }
}
