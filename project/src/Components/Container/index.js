import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const Container = ({href , products, moreProducts}) => ( 
	  <div className="Container">
		<Header
		 href={href}
		/>

		<Main
		 products={products}
		 moreProducts={moreProducts}
		/>

		<Footer />
	  </div>
);

export default Container;