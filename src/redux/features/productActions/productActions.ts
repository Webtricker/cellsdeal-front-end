import { IProduct } from '@/types/product.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProductActions {
    productToView: IProduct | null;
}

// Initial state
export const initialState: IProductActions = {
    productToView: null,
};

const productActions = createSlice({
    name: 'productActions',
    initialState,
    reducers: {
        toggleProductToView: (state, action: PayloadAction<IProduct | null>) => {
            state.productToView = action.payload;
        },
    },
});

export const { toggleProductToView } = productActions.actions;

export default productActions;
