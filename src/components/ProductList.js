import React, { Component } from 'react';
import Product from './Product';
import styled from 'styled-components';

// import {storeProducts} from '../data';
import {ProductConsumer} from '../context';


export default class ProductList extends Component {
    // state={
    //     products: storeProducts
    // };
    render() {

        return (
            <React.Fragment>
                <TitleWrapper>
                <div className="py-5">
                    <div className="container">
                        <div className="logo">Asian Beauty Center</div>
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                    </TitleWrapper>
            </React.Fragment>
            // <Product />
        )
    }
}

const TitleWrapper = styled.nav`
.logo {
    font-size:3rem;
    color: var(--mainDark) !important;
    text-align: center;
    font-family: 'Jacques Francois', serif;
}
`