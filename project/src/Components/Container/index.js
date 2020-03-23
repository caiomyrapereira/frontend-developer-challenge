import React,{Fragment} from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const Container = ({href , products, moreProducts}) => ( 
	  <Fragment>
		<Header
		 href={href}
		/>

		<Main
		 products={products}
		 moreProducts={moreProducts}
		/>

		<Footer />
	  </Fragment>
);

export default Container;