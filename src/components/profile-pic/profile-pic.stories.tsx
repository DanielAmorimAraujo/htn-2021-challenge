import React from "react";
import { workshop } from "library/data";
import ProfilePic from "./profile-pic";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "ProfilePic",
  component: ProfilePic,
};

/**
 * @returns the default storybook
 */
export const Default = (): React.ReactElement => (
  <ProfilePic profile_pic={workshop.speakers[0].profile_pic || ""} />
);

/**
 * @returns with no profile picture
 */
export const NoProfilePic = (): React.ReactElement => <ProfilePic />;
