import React, { useState, useEffect } from "react";

import styled from "styled-components";

import EventCard from "components/event-card/event-card";
import Filter from "components/filter/filter";
import { Event, EventApi, EventType, TEventType } from "models/event";

export interface PEventList {
  authenticated: boolean;
}

const SEventListWrap = styled.div`
  margin: 32px auto;
  max-width: 1024px;
`;

const SFilterWrap = styled.div`
  padding: 8px 16px;
`;

const SEventCardWrap = styled.div`
  padding: 8px 16px;
`;

const SNoResults = styled.h2`
  padding: 32px;
  opacity: 0.75;
`;

/**
 * Event list component
 * - displays all events (based on filter)
 *
 * @param props - EventList props
 * @returns the EventList component
 */
const EventList = (props: PEventList): React.ReactElement => {
  const { authenticated } = props;
  const [events, setEvents] = useState<Event[]>();
  const [filter, setFilter] = useState<{
    eventTypes: TEventType[];
    relatedEvents?: Event;
  }>({
    eventTypes: [...EventType],
  });

  useEffect(() => {
    EventApi.getAll().then((res: Event[]) => {
      setEvents(
        res.sort((a: Event, b: Event) =>
          a.start_time === b.start_time
            ? 0
            : a.start_time < b.start_time
            ? -1
            : 1
        )
      );
    });
  }, []);

  const setEventTypes = (eventType: TEventType) => {
    setFilter({
      ...filter,
      eventTypes: filter.eventTypes.includes(eventType)
        ? filter.eventTypes.filter((et) => et !== eventType)
        : filter.eventTypes.concat(eventType),
    });
  };

  const setRelatedEvents = (event?: Event) => {
    setFilter({ ...filter, relatedEvents: event });
  };

  const filteredEvents = events?.filter(
    (event) =>
      (authenticated || event.permission === "public") &&
      filter.eventTypes.includes(event.event_type) &&
      (!filter.relatedEvents ||
        filter.relatedEvents.related_events.includes(event.id))
  );

  return (
    <SEventListWrap>
      <SFilterWrap>
        <Filter
          filter={filter}
          setEventTypes={setEventTypes}
          setRelatedEvents={setRelatedEvents}
        />
      </SFilterWrap>
      {filteredEvents && filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <SEventCardWrap>
            <EventCard
              event={event}
              authenticated={authenticated}
              setRelatedEvents={setRelatedEvents}
            />
          </SEventCardWrap>
        ))
      ) : (
        <SNoResults>No Events Found :(</SNoResults>
      )}
    </SEventListWrap>
  );
};

export default EventList;
