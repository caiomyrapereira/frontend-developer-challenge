import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const Container = ({href}) => ( 
	  <div className="Container">
		<Header
		 href={href}
		/>

	    <Main />

		<Footer />
	  </div>
);

export default Container;