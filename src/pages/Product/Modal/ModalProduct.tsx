import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Checkbox, FormControlLabel, Box } from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Rating } from '@mui/material';  // Importation du composant Rating
import useProductRequests from "../../../api/useProductRequests";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingProduct: any;
  setProducts:(products: any[]) => void;
  products:any;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis"),
  price: Yup.number().required("Le prix est requis").positive("Le prix doit être positif"),
  type: Yup.string().required("Le type est requis"),
  rating: Yup.number().required("L'évaluation est requise").min(0, "L'évaluation doit être au moins 0").max(5, "L'évaluation ne peut pas dépasser 5"),
  warranty_years: Yup.number().required("La garantie est requise").positive("La garantie doit être un nombre positif"),
  available: Yup.boolean(), 
});

const ProductModal = ({ isOpen, onClose, editingProduct, setProducts, products }: ProductModalProps) => {
  const { createProduct, updateProduct, fetchProducts } = useProductRequests();

  const handleSave = async (values: any) => {
    try {
      let savedProduct;
      if (editingProduct) {
        savedProduct = await updateProduct({ ...values, _id: editingProduct._id });
      } else {
        savedProduct = await createProduct(values);
        setProducts([...products, savedProduct]);
      }

      const updatedProducts = await fetchProducts();  
      setProducts(updatedProducts);  

      onClose();
    } catch (error) {
      console.error("Error while saving product:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{editingProduct ? "Modifier le produit" : "Ajouter un produit"}</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            name: editingProduct ? editingProduct.name : "",
            price: editingProduct ? editingProduct.price : "",
            type: editingProduct ? editingProduct.type : "",
            rating: editingProduct ? editingProduct.rating : 0,  // Initialisation du rating à 0 si vide
            warranty_years: editingProduct ? editingProduct.warranty_years : "",
            available: editingProduct ? editingProduct.available : true,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSave}
        >
          {({ values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
            <Form>
              <Field
                name="name"
                as={TextField}
                label="Nom"
                fullWidth
                margin="dense"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <Field
                name="price"
                as={TextField}
                label="Prix (€)"
                type="number"
                fullWidth
                margin="dense"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.price && Boolean(errors.price)}
                helperText={touched.price && errors.price}
              />
              <Field
                name="type"
                as={TextField}
                label="Type"
                fullWidth
                margin="dense"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.type && Boolean(errors.type)}
                helperText={touched.type && errors.type}
              />
              <Box>
                <label>Évaluation</label>
                <Rating
                  name="rating"
                  value={values.rating}
                  onChange={(_, value) => setFieldValue("rating", value || 0)}  // Met à jour le rating dans Formik
                  precision={0.5}
                />
              </Box>
              <Field
                name="warranty_years"
                as={TextField}
                label="Garantie (ans)"
                type="number"
                fullWidth
                margin="dense"
                value={values.warranty_years}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.warranty_years && Boolean(errors.warranty_years)}
                helperText={touched.warranty_years && errors.warranty_years}
              />
              <Field
                name="available"
                type="checkbox"
                as={FormControlLabel}
                control={<Checkbox />}
                label="Disponible"
                checked={values.available}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <DialogActions>
                <Button onClick={onClose}>Annuler</Button>
                <Button type="submit" variant="contained" color="primary">
                  {editingProduct ? "Mettre à jour" : "Ajouter"}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
