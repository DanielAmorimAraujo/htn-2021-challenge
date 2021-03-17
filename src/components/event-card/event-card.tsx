import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { DateTime } from "luxon";

import Speaker from "components/speaker/speaker";
import EventBadge from "components/event-badge/event-badge";
import UrlButton from "components/url-button/url-button";
import { Event } from "models/event";

export interface PEventCard {
  event: Event;
  authenticated: boolean;
  setRelatedEvents: (event?: Event) => void;
}

const SCardWrap = styled.div`
  padding: 16px;
  padding-bottom: 0;
`;

const SCol = styled(Col)`
  margin-bottom: 16px;
`;

const SEventBadgeWrap = styled.span`
  margin: 0 8px;
  vertical-align: text-top;
`;

const SUrlButtonWrap = styled.span`
  display: flex;
  justify-content: center;
`;

const SCardBody = styled(Card.Body)`
  padding-top: 0;
`;

const SSpeakerWrap = styled.span`
  margin: 0 8px;
`;

/**
 * Event card component
 * - displays information for one event
 *
 * @param props - EventCard props
 * @returns the EventCard component
 */
const EventCard = (props: PEventCard): React.ReactElement => {
  const { event, authenticated, setRelatedEvents } = props;

  const startDate = DateTime.fromMillis(event.start_time);
  const endDate = DateTime.fromMillis(event.end_time);
  const date = `${startDate.toLocaleString(
    DateTime.TIME_SIMPLE
  )} to ${endDate.toLocaleString(DateTime.TIME_SIMPLE)} on ${endDate.toFormat(
    "cccc, LLLL d, yyyy"
  )}`;

  return (
    <Card>
      <SCardWrap>
        <Row>
          <SCol>
            <Card.Title>
              {event.name}
              <SEventBadgeWrap>
                <EventBadge eventType={event.event_type} />
              </SEventBadgeWrap>
            </Card.Title>
            <Card.Subtitle className="text-muted">{date}</Card.Subtitle>
          </SCol>
          <SCol md="auto" sm={12}>
            <SUrlButtonWrap>
              {event.public_url && <UrlButton url={event.public_url} />}
              {authenticated && event.private_url && (
                <UrlButton url={event.private_url} />
              )}
            </SUrlButtonWrap>
          </SCol>
        </Row>
        <SCardBody>{event.description}</SCardBody>
      </SCardWrap>
      {event.speakers.length + event.related_events.length > 0 && (
        <Card.Footer>
          <Row>
            <Col>
              {event.speakers.length > 0 && (
                <>
                  Speaker{event.speakers.length > 1 ? "s" : ""}:{" "}
                  {event.speakers.map((s) => (
                    <SSpeakerWrap>
                      <Speaker speaker={s} />
                    </SSpeakerWrap>
                  ))}
                </>
              )}
            </Col>
            <Col sm="auto" xs={12}>
              {event.related_events.length > 0 && (
                <Button
                  variant="link"
                  onClick={() => {
                    setRelatedEvents(event);
                  }}
                >
                  Related Events
                </Button>
              )}
            </Col>
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default EventCard;
