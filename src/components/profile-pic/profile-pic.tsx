import React from "react";

import Image from "react-bootstrap/Image";
import { PersonCircle } from "react-bootstrap-icons";
import styled from "styled-components";

interface PProfilePic {
  profile_pic?: string;
}

const SImage = styled(Image)`
  width: 32px;
  padding-bottom: 4px;
`;

const SPersonCircle = styled(PersonCircle)`
  width: 32px;
  height: 32px;
  padding-bottom: 4px;
`;

/**
 * Profile picture component
 * - photo icon for a speaker
 *
 * @param props - ProfilePic props
 * @returns the ProfilePic component
 */
const ProfilePic = (props: PProfilePic): React.ReactElement => {
  const { profile_pic } = props;

  if (profile_pic) return <SImage src={profile_pic} roundedCircle />;
  return <SPersonCircle />;
};

export default ProfilePic;
