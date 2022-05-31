import React from 'react';
import '@fontsource/montserrat';
import styled from 'styled-components';
import NavLinks from './NavLinks';

const MobileNavStyle = styled.nav`
	display:none;
`;

export default function MobileNav() {
  return (
    <>
      <MobileNavStyle>
        <NavLinks />
      </MobileNavStyle>
    </>
  );
}
