import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoDiv = styled.div`
flex: 1;
	justify-content: flex-start;
	cursor: pointer;
`;

export const Ul = styled.ul`
    flex-direction: row;
    justify-content: flex-end;
	align-items: center;
	list-style: none;
	padding-right: 20px;
	padding-top: 24px;
	//flex-direction: row;
`;

export const Li = styled.li`
	display: inline-block;
	padding-left: 10px;
`;

export const StyledLink = styled(Link)`
	height: 20px;
	right: 204px;
	top: calc(50% - 20px / 2 + 0.5px);
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

export const Logo = styled.img`
	display: inline;
	justify-content: flex-start;
	width: 149px;
	height: 36px;
	padding-top: 32px;
	padding-left: 80px;
`;
