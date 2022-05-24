import React from 'react'
import { Element } from "react-scroll";

const LandingPage = () => {
  return (
		<div>
			<div> Heading</div>
			<div> Heatmap</div>
			<Element id = "howItWorks" style={{ height: 400 }}>
				para 1
			</Element>
			<Element id = "about" style={{ height: 400 }}>
				para 2
			</Element>
		</div>
  );
}

export default LandingPage