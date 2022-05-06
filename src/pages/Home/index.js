import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Grid, Paper, } from '@material-ui/core';
import "../../assets/css/app.css";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/actions';
import CartDetail from './CartDetail';

const axios = require('axios').default;

Home.propTypes = {

};

function Home(props) {
    const [showCartDetail, setShowCartDetail] = useState(false);
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.cart.products);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                if (response && response.data) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.log(error, "error");
            }
        }

        getProducts();
    }, []);


    function handleAddToCart(product) {
        dispatch(addProduct(product));
    }

    function handleToggleCartDetail() {
        setShowCartDetail(prevState => !prevState);
    }

    return (
        <div className="container">
            <div id="header">
                <div className="shop-name">
                    NDT shop
                </div>
                <div
                    onClick={handleToggleCartDetail}
                    className="shop-cart"
                >
                    Số lượng sản phẩm: {productsInCart.length}
                </div>
            </div>
            <div className="product">
                <div className="product-category">
                    <h1 className="heading-category">Danh mục sản phẩm</h1>
                    <div className="product-list">
                        <Grid container spacing={3}>
                            {
                                products.map(p => {
                                    return (
                                        <Grid item xs={3} key={p.id}>
                                            <Paper>
                                                <div className="product">
                                                    <img src={p.image} alt={p.title} className="product-image w-100" />
                                                    <h3 className="product-name">{p.title}</h3>
                                                    <p className="product-price">{p.price} $</p>
                                                    <button
                                                        className="add-cart"
                                                        onClick={() => handleAddToCart(p)}
                                                    >
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </div>
                </div>
            </div>

            {
                showCartDetail && (
                    <CartDetail
                        open={showCartDetail}
                        handleClose={handleToggleCartDetail}
                    />
                )
            }
        </div>
    );
}

export default Home;

{/* 
    <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/product-detail/:id">Detail</Link>
    </nav> 
*/}