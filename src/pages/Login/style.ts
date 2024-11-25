// style.ts
import { styled } from '@mui/system';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';

// Conteneur principal
export const MainContainer = styled(Grid)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  overflow: 'hidden', // Retirer le scroll à droite
});

// Papier du formulaire de login
export const LoginPaper = styled(Paper)({
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '380px',
  width: '100%',
  backgroundColor: '#ffffff',
});

// Titre de la page de login
export const LoginTitle = styled(Typography)({
  marginBottom: '1rem',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: '#333',
});

// Avatar stylisé pour l'icône de login
export const AvatarStyled = styled(Avatar)({
  backgroundColor: '#6200ea',
  marginBottom: '1rem',
  width: '60px',
  height: '60px',
  margin: '0 auto',
});

// Champ de texte stylisé
export const StyledTextField = styled(TextField)({
  marginBottom: '1.5rem',
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiInputAdornment-root': {
    color: '#6200ea',
  },
});

// Bouton de login
export const LoginButton = styled(Button)({
  marginTop: '1.5rem',
  padding: '1rem',
  borderRadius: '8px',
  backgroundColor: '#6200ea',
  color: '#fff',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#3700b3',
  },
});

// Lien stylisé (par exemple pour le mot de passe oublié ou le signup)
export const LinkStyled = styled(Link)({
  color: '#6200ea',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});
