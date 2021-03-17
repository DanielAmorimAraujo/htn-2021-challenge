import React from "react";

import Badge from "react-bootstrap/Badge";
import styled from "styled-components";

import EventBadge from "components/event-badge/event-badge";
import { Event, EventType, TEventType } from "models/event";

interface PFilter {
  filter: {
    eventTypes: TEventType[];
    relatedEvents?: Event;
  };
  setEventTypes: (eventType: TEventType) => void;
  setRelatedEvents: (event?: Event) => void;
}

const SFilterWrap = styled.div`
  padding: 0 16px;
  overflow: auto;
`;

const SFilterLabel = styled.span`
  font-size: 14px;
`;

const SEventBadgeWrap = styled.span`
  margin-right: 8px;
  opacity: ${(props: { disabled: boolean }) => (props.disabled ? "0.5" : "1")};
`;

const SButton = styled.button`
  color: white;
  background-color: Transparent;
  border: none;
`;

/**
 * Filter component
 * - displays a list of filters
 *
 * @param props - Filter props
 * @returns the Filter component
 */
const Filter = (props: PFilter): React.ReactElement => {
  const {
    filter: { eventTypes, relatedEvents },
    setEventTypes,
    setRelatedEvents,
  } = props;
  return (
    <SFilterWrap>
      <SFilterLabel>FILTERS: </SFilterLabel>
      {EventType.map((eventType) => (
        <SEventBadgeWrap disabled={!eventTypes.includes(eventType)}>
          <EventBadge eventType={eventType} onClick={setEventTypes} />
        </SEventBadgeWrap>
      ))}
      {relatedEvents && (
        <Badge variant="dark">
          Events related to <i>{relatedEvents.name}</i>
          <SButton
            onClick={() => {
              setRelatedEvents();
            }}
          >
            <span>&times;</span>
          </SButton>
        </Badge>
      )}
    </SFilterWrap>
  );
};

export default Filter;
