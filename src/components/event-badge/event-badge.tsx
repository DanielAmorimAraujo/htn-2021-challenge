import React from "react";

import Badge from "react-bootstrap/Badge";
import styled from "styled-components";

import { TEventType } from "models/event";

interface PEventBadge {
  eventType: TEventType;
}

const SBadge = styled(Badge)`
  width: 80px;
  font-size: 12px;
`;

/**
 * Event badge component
 * - acts as a tag for EventType
 *
 * @param props - EventBadge props
 * @returns the EventBadge component
 */
const EventBadge = (props: PEventBadge): React.ReactElement => {
  const { eventType } = props;

  const colors = {
    workshop: "warning",
    activity: "info",
    tech_talk: "secondary",
  };

  return (
    <SBadge variant={colors[eventType]} pill>
      {eventType
        .split("_")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ")}
    </SBadge>
  );
};

export default EventBadge;
