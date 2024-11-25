import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

// Fonction pour écouter l'événement de mise à jour du produit
export const listenForProductUpdates = (callback: (updatedProduct: any) => void) => {
  socket.on('product_updated', (updatedProduct) => {
    callback(updatedProduct);
  });
};

// Fonction pour émettre une mise à jour de produit
export const updateProduct = (updatedProduct: any) => {
  socket.emit('update_product', updatedProduct);
};

export default socket;
