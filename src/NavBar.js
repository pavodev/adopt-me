import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
//import colors from "./colors";

const Spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const NavBar = () => (
  <header
    css={css`
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 0 0 5px 5px;
    `}
  >
    <Link
      css={css`
        &:hover {
          text-decoration: underline;
        }
      `}
      to="/"
    >
      Adopt Me!
    </Link>
    <span
      css={css`
        display: inline-block;
        animation: 3s ${Spin} linear infinite;
        font-size: 60px;

        &:hover {
          text-decoration: underline;
        }
      `}
      aria-label="logo"
      role="img"
    >
      🐩
    </span>
  </header>
);

export default NavBar;
