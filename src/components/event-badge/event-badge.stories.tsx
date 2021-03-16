import React from "react";
import EventBadge from "./event-badge";
import { EventType } from "models/event";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "EventBadge",
  component: EventBadge,
};

/**
 * @returns the default storybook
 */
export const Default = (): React.ReactElement[] =>
  EventType.map((eventType) => <EventBadge eventType={eventType} />);
