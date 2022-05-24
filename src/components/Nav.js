import React, { useRef } from "react";
import { Link} from "react-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import "@fontsource/montserrat";
import styled from "styled-components";
import redditLogo from '../assets/logo.svg'; 

const Navbar = styled.div`
	display: flex;
	width: 100%;
	height: 100px;
`;

const LogoDiv = styled.div`
    flex:1;
`;

const Ul = styled.ul`
	justify-content: flex-end;
	list-style: none;
	padding-right: 20px;
	padding-top: 24px;
	//flex-direction: row;
`;

const Li = styled.li`
	display: inline-block;
	padding-left: 10px;
`;

const StyledLink = styled(Link)`
	height: 20px;
	right: 204px;
	top: calc(50% - 20px / 2 + 0.5px);
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	text-decoration: none;
	font-size: 16px;
	line-height: 20px;
	/* identical to box height */
	text-align: right;
	color: #636363;
    cursor: pointer;
`;

const Logo = styled.img`
    display: inline;
    justify-content: flex-start;
    width:149px;
    height:36px;
    padding-top: 32px;
    padding-left: 80px;
`


const Nav = () => {

    const howItWorksClickRef = useRef(null);
	const aboutOnClickRef = useRef(null);
    const scrollEffect = (targetRef) => {
		targetRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};
    
    return (
		<Navbar>
			<Router>
				<LogoDiv>
					<Logo src={redditLogo} alt="logo" />
				</LogoDiv>

				<nav>
					<Ul>
						<Li>
							<StyledLink to="/search">Search</StyledLink>
						</Li>
						<Li>
							<StyledLink
								activeClass="active" smooth spy to="howItWorks">
								How It Works
							</StyledLink>
						</Li>
						<Li>
							<StyledLink activeClass="active" smooth spy to="about">
								About
							</StyledLink>
						</Li>
					</Ul>
					<Routes>
						<Route path="/search" element={<Search />} />
					</Routes>
				</nav>
			</Router>
		</Navbar>
	);
};

export default Nav;