import { useEffect, createContext, useState, useContext } from "react";

export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
}; //Contexto criado para ser usado em qualquer lugar

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products") //Faz um GET na API
      .then((res) => res.json()) //Volta a resposta do JSON
      .then(setProducts) //Vem os dados do JSON
      .catch(console.dir);
  }, []);

  const contextValues = { products };

  return (
    <productContext.Provider value={contextValues}> { /* Passa os dados para o contexto */}
      {children}
    </productContext.Provider>
  );
};
