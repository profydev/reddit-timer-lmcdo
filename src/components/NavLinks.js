    import React, { useRef, useState } from "react";
    import "@fontsource/montserrat";
    import styled from "styled-components";     
    import { LogoDiv, Logo, Ul, Li, StyledLink, } from './NavLinks.styled';
	import redditLogo from "../assets/logo.svg";
    import Hamburger from "hamburger-react";

const Header = styled.header`
    width:100%;     
    display: flex;
    justify-content:flex-end;
    `

    export default function NavLinks() {
    const [isOpen, setOpen] = useState(false);
    const howItWorksClickRef = useRef(null);
    const aboutOnClickRef = useRef(null);
    const handleScroll = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };
    return (
		<>
			<Header>
				<LogoDiv>
					<StyledLink to="/">
						<Logo src={redditLogo} alt="logo" />
					</StyledLink>
				</LogoDiv>
				<Ul>
					<Li>
						<StyledLink to="/search/javascript"> Search</StyledLink>
					</Li>
					<Li ref={howItWorksClickRef}>
						<StyledLink
							to="/#how-it-works"
							onClick={() => {
								handleScroll(howItWorksClickRef.current);
							}}
						>
							How it works
						</StyledLink>
					</Li>
					<Li ref={aboutOnClickRef}>
						<StyledLink
							to="/#about"
							onClick={() => {
								handleScroll(aboutOnClickRef.current);
							}}
						>
							About
						</StyledLink>
					</Li>
				</Ul>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</Header>
		</>
	);
}