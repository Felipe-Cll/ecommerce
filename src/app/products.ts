export interface IProduct {
  id: number;
  description: string;
  price: number;
  descriptionPrice: string;
  stock: number;
  image: string;
}

export interface IProductCart extends IProduct {
  amount: number;
}

export const products: IProduct[] = [
  { id: 1, description: "Mouse fino", price: 439.00, descriptionPrice: "À vista no PIX", image: "./assets/mouse-1.jpg", stock: 10 },
  { id: 2, description: "Laptop Mac", price: 1200.50, descriptionPrice: "À vista no PIX", image: "./assets/laptop-2.png", stock: 10 },
  { id: 3, description: "Mouse Gamer preto", price: 749.99, descriptionPrice: "À vista no PIX", image: "./assets/mouse-2.jpg", stock: 10 },
  { id: 4, description: "Mouse cinza", price: 599.99, descriptionPrice: "À vista no PIX", image: "./assets/mouse-3.jpg", stock: 10 },
  { id: 5, description: "Mouse gamer branco", price: 299.99, descriptionPrice: "À vista no PIX", image: "./assets/mouse-4.jpg", stock: 10 },
  { id: 6, description: "Teclado branco", price: 399.99, descriptionPrice: "À vista no PIX", image: "./assets/teclado-1.jpg", stock: 10 },
  { id: 7, description: "Teclado preto", price: 499.99, descriptionPrice: "À vista no PIX", image: "./assets/teclado-2.jpg", stock: 10 },
  { id: 8, description: "Laptop cinza", price: 18449.99, descriptionPrice: "À vista no PIX", image: "./assets/laptop-1.jpg", stock: 10 },
  { id: 9, description: "Processador Ryzen", price: 1000, descriptionPrice: "À vista no PIX", image: "./assets/processador.jpg", stock: 10 },
  { id: 10, description: "Placa de vídeo", price: 2500, descriptionPrice: "À vista no PIX", image: "./assets/placa-video.jpg", stock: 10 },
  { id: 11, description: "Monitor branco", price: 4500, descriptionPrice: "À vista no PIX", image: "./assets/monitor-1.jpg", stock: 10 },
  { id: 12, description: "HD", price: 20, descriptionPrice: "À vista no PIX", image: "./assets/hd.jpg", stock: 10 },
  { id: 13, description: "AirPods", price: 200, descriptionPrice: "À vista no PIX", image: "./assets/fone-de-ouvido-1.jpg", stock: 10 },
  { id: 14, description: "Fonde de ouvido FX", price: 50, descriptionPrice: "À vista no PIX", image: "./assets/fone-de-ouvido-2.jpg", stock: 10 },
  { id: 15, description: "Fonde de ouvido XEZ", price: 159.99, descriptionPrice: "À vista no PIX", image: "./assets/fone-de-ouvido-3.jpg", stock: 10 },
]
