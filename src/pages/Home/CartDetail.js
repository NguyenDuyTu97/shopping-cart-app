import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch, useSelector, } from 'react-redux';
import { deleteProduct } from '../../redux/actions';

CartDetail.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,

    products: PropTypes.array,
};


function CartDetail({ open, handleClose, }) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    function handleDeleteProduct(productId) {
        dispatch(deleteProduct(productId));
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Danh sách sản phẩm đã chọn mua"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <ul>
                            {
                                products.map(p => (
                                    <li key={p.id}>
                                        {p.title}
                                        <DeleteIcon
                                            onClick={() => handleDeleteProduct(p.id)}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default CartDetail;