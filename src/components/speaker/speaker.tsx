import React from "react";

import styled from "styled-components";

import ProfilePic from "components/profile-pic/profile-pic";
import { TSpeaker } from "models/event";

export interface PSpeaker {
  speaker: TSpeaker;
}

const SName = styled.span`
  margin-left: 10px;
`;

/**
 * Speaker component
 * - displays a speaker's name and image
 *
 * @param props - Speaker props
 * @returns the Speaker component
 */
const Speaker = (props: PSpeaker): React.ReactElement => {
  const { speaker } = props;

  return (
    <>
      <ProfilePic profile_pic={speaker.profile_pic} />
      <SName>{speaker.name}</SName>
    </>
  );
};

export default Speaker;
