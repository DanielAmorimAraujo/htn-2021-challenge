import React from "react";
import { techtalk, workshop } from "library/data";
import Speaker from "./speaker";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Speaker",
  component: Speaker,
};

/**
 * @returns the default storybook
 */
export const Default = (): React.ReactElement => (
  <Speaker speaker={workshop.speakers[0]} />
);

/**
 * @returns the no picture storybook
 */
export const NoPicture = (): React.ReactElement => (
  <Speaker speaker={techtalk.speakers[0]} />
);
