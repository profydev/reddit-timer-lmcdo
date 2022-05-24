import React from "react";
import Header from "./components/Header";
import GlobalStyle from './globals';
import LandingPage from './components/LandingPage';


const App = () => {
  return (
		<>
			<GlobalStyle />
		  <Header />
		  <div>
		  <LandingPage />
		  </div>
		</>
  );
}



export default App;
 
