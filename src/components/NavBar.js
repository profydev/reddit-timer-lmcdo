import "@fontsource/montserrat";
import styled from "styled-components";
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100px;
`;

export default function NavBar() {  
    return (
		<Nav>
			<MobileNav />
			<DesktopNav />
		</Nav>
	);
};
