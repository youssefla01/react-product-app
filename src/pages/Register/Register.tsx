import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import useApiRequests from "../../api/useApiRequests";

const registerSchema = object({
  email: string()
    .min(5, "L'email doit contenir au moins 5 caractères.")
    .max(50, "L'email ne doit pas dépasser 50 caractères.")
    .email("L'email doit être valide.")
    .required("L'email est obligatoire."),
  firstName: string()
    .max(20, "Le prénom ne doit pas dépasser 20 caractères.")
    .required("Le prénom est obligatoire."),
  lastName: string()
    .max(30, "Le nom de famille ne doit pas dépasser 30 caractères.")
    .required("Le nom de famille est obligatoire."),
  password: string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères.")
    .max(20, "Le mot de passe ne doit pas dépasser 20 caractères.")
    .matches(/\d+/, "Le mot de passe doit contenir au moins un chiffre.")
    .matches(
      /[a-z]/,
      "Le mot de passe doit contenir au moins une lettre minuscule."
    )
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au moins une lettre majuscule."
    )
    .matches(
      /[!/[@$!%*?&,]+/,
      "Le mot de passe doit contenir au moins un caractère spécial."
    ),
});

const Register: React.FC = () => {
  const { register } = useApiRequests();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            Product APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          ></Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Inscription
          </Typography>

          <Formik
            initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              isSubmitting,
              handleChange,
              values,
              touched,
              errors,
              handleBlur,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Prénom"
                    name="firstName"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={errors.firstName}
                  />
                  <TextField
                    label="Nom de famille"
                    name="lastName"
                    id="lastName"
                    type="text"
                    variant="outlined"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={errors.lastName}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                  />
                  <TextField
                    label="Mot de passe"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#0367A6",
                      "&:hover": { backgroundColor: "#023373" },
                    }}
                    disabled={isSubmitting}
                  >
                    Soumettre
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Vous avez déjà un compte ?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
