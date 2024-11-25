import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { useNotification } from "../components/NotificationProvider";
import {
  setProducts,
  addProduct,
  updateProduct as updateProductAction,
  deleteProduct as deleteProductAction,
} from "../features/productSlice";

interface ProductProps {
  _id?: string | number;
  name: string;
  description?: string;
  price: number;
  stock?: number;
  image?: string;
  categoryId?: string;
  brandId?: string;
}

const useProductRequests = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();
  const { showNotification } = useNotification();

  const fetchProducts = async () => {
    try {
      const response = await axiosToken.get(`/products`);
      dispatch(setProducts(response.data));
      showNotification("Produits chargés avec succès.", "success");
      return response.data;
    } catch (error: any) {
      console.error(
        `Erreur lors du chargement des produits : ${error.message}`
      );
      showNotification("Erreur lors du chargement des produits.", "error");
    }
  };

  const createProduct = async (data: ProductProps) => {
    try {
      const response = await axiosToken.post(`/products`, data);
      dispatch(addProduct(response.data));
      showNotification("Produit ajouté avec succès.", "success");
      return response.data;
    } catch (error: any) {
      console.error(`Erreur lors de l'ajout du produit : ${error.message}`);
      showNotification("Erreur lors de l'ajout du produit.", "error");
    }
  };

  const deleteProduct = async (id: string | number) => {
    try {
      await axiosToken.delete(`/products/${id}`);
      dispatch(deleteProductAction(id));
      showNotification("Produit supprimé avec succès.", "success");
    } catch (error: any) {
      console.error(
        `Erreur lors de la suppression du produit : ${error.message}`
      );
      showNotification("Erreur lors de la suppression du produit.", "error");
    }
  };

  const updateProduct = async (
    data: ProductProps & { _id: string | number }
  ) => {
    try {
      const response = await axiosToken.put(`/products/${data._id}`, data);
      dispatch(updateProductAction(response.data));
      showNotification("Produit mis à jour avec succès.", "success");
      return response.data;
    } catch (error: any) {
      console.error(
        `Erreur lors de la mise à jour du produit : ${error.message}`
      );
      showNotification("Erreur lors de la mise à jour du produit.", "error");
    }
  };

  return { fetchProducts, createProduct, deleteProduct, updateProduct };
};

export default useProductRequests;
