import React from "react";

import Button from "react-bootstrap/Button";
import { Link45deg } from "react-bootstrap-icons";
import styled from "styled-components";

export interface PUrlButton {
  url: string;
}

const SButton = styled(Button)`
  width: 128px;
  border-radius: 8px;
  float: right;
  margin: 0 8px;
`;

const SLink45deg = styled(Link45deg)`
  margin: 0 4px;
  padding-bottom: 2px;
`;

/**
 * URL button component
 * - button to display event url
 *
 * @param props - UrlButton props
 * @returns the UrlButton component
 */
const UrlButton = (props: PUrlButton): React.ReactElement => {
  const { url } = props;

  let site = "";
  if (url.search("hopin") !== -1) site = "Hopin";
  if (url.search("youtu.be") !== -1) site = "YouTube";

  return (
    <SButton
      variant={site === "YouTube" ? "outline-danger" : "outline-primary"}
      size="sm"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      {site}
      <SLink45deg size={16} />
    </SButton>
  );
};

export default UrlButton;
