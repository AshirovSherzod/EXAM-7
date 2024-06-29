import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem("shopCart")) || [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const index = state.value.findIndex((el) => el.id === payload.id);
            if (index === -1) {
                state.value = [...state.value, { ...payload, shopCount: 1 }];
                state.totalCount + 1;
            } else {
                state.value = state.value.map((cart) =>
                    cart.id === payload.id
                        ? ({ ...cart, shopCount: cart.shopCount + 1 }, state.totalCount + 1)
                        : cart
                );
            }
            localStorage.setItem("shopCart", JSON.stringify(state.value));
            return state;
        },
        deleteToCart: (state, { payload }) => {
            localStorage.setItem(
                "shopCart",
                JSON.stringify(state?.value?.filter((cart) => cart.id !== payload))
            );
            return state;
        },
    },
});

export const { addToCart, addToShopCount, removeToShopCount, deleteToCart } =
    cartSlice.actions;

export default cartSlice.reducer;