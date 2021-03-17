import React from "react";
import { techtalk, workshop } from "library/data";
import EventCard from "./event-card";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "EventCard",
  component: EventCard,
};

/**
 * @returns the authenticated public storybook
 */
export const AuthPublic = (): React.ReactElement => (
  <EventCard
    event={techtalk}
    authenticated
    setRelatedEvents={() => undefined}
  />
);

/**
 * @returns the un-authenticated public storybook
 */
export const UnAuthPublic = (): React.ReactElement => (
  <EventCard
    event={techtalk}
    authenticated={false}
    setRelatedEvents={() => undefined}
  />
);

/**
 * @returns the authenticated private storybook
 */
export const AuthPrivate = (): React.ReactElement => (
  <EventCard
    event={workshop}
    authenticated
    setRelatedEvents={() => undefined}
  />
);

/**
 * @returns the un-authenticated private storybook
 */
export const UnAuthPrivate = (): React.ReactElement => (
  <EventCard
    event={workshop}
    authenticated={false}
    setRelatedEvents={() => undefined}
  />
);
