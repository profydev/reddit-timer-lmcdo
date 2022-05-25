import React from "react";
import "@fontsource/montserrat";
import NavLinks from "./NavLinks";
import styled from 'styled-components';


const MobileNavStyle = styled.nav`
	display:none;
`

export default function MobileNav (){
	return (
		<>
			<MobileNavStyle>
				<NavLinks />
			</MobileNavStyle>
		</>
	);
};
