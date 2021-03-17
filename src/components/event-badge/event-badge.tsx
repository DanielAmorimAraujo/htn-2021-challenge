import React from "react";

import Badge from "react-bootstrap/Badge";
import styled from "styled-components";

import { TEventType } from "models/event";

interface PEventBadge {
  eventType: TEventType;
  onClick?: (eventType: TEventType) => void;
}

const SBadge = styled(Badge)`
  width: 80px;
  font-size: 12px;
  cursor: ${(props) => (props.onClick ? "pointer" : "initial")};
  user-select: none;
`;

/**
 * Event badge component
 * - acts as a tag for EventType
 *
 * @param props - EventBadge props
 * @returns the EventBadge component
 */
const EventBadge = (props: PEventBadge): React.ReactElement => {
  const { eventType, onClick } = props;

  const colors = {
    workshop: "warning",
    activity: "info",
    tech_talk: "secondary",
  };

  return (
    <SBadge
      pill
      variant={colors[eventType]}
      onClick={() => {
        if (onClick) onClick(eventType);
      }}
    >
      {eventType
        .split("_")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ")}
    </SBadge>
  );
};

export default EventBadge;
