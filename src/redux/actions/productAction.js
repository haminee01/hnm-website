import { productActions } from "../reducers/productReducer";
import productData from "../../db.json";

function getProducts(searchQuery) {
  return async (dispatch) => {
    try {
      let data = productData.products;

      if (searchQuery) {
        data = data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      dispatch(productActions.getAllProducts({ data }));
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    try {
      const product = productData.products.find((item) => item.id == id);

      if (product) {
        dispatch(productActions.getSingleProduct({ data: product }));
      } else {
        console.error(`Product with ID ${id} not found.`);
      }
    } catch (error) {
      console.error("Failed to load product details:", error);
    }
  };
}

export const productAction = { getProducts, getProductDetail };
