import React from 'react';
import styled from 'styled-components';
import { StyledLink, FooterLogo, FooterNav } from "./NavLinks.styled";
import redditLogo from "../assets/logo.svg";

const Link = styled.a`
	font-family: "Montserrat";
	font-style: normal;
	text-decoration: none;
	font-size: 16px;
	line-height: 20px;
	/* identical to box height */
	text-align: right;
	color: #636363;
	cursor: pointer;
`;

export default function Footer() {
  return (
		<FooterNav>
			<Link href="https://profy.dev/employers">
				 profy.dev
			</Link>
			<StyledLink to="/">
				<FooterLogo src={redditLogo} alt="logo" />
			</StyledLink>
			<StyledLink to="/terms ">
				Terms <span>&#38;</span> Privacy
			</StyledLink>
		</FooterNav>
  );
}
