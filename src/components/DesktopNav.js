import React from "react";
import "@fontsource/montserrat";
import styled from "styled-components";
import NavLinks from "./NavLinks";


const DesktopNavStyle = styled.nav`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
`;

export default function DesktopNav() {
	return (
		<>
			<DesktopNavStyle>
				<NavLinks />
			</DesktopNavStyle>
		</>
	);
}
