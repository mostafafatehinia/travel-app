"use client";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  archived: boolean;
};

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://example.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      alert(error);
    }
  };

  const add = () => {
    products.push({ id: Date.now(), title: inputValue, archived: false });
    setProducts(products);
    setInputValue("");
  };

  const toggle = (id: number) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products[i] = {
          id: products[i].id,
          title: products[i].title,
          archived: products[i].archived ? false : true,
        };
        break;
      }
    }
    setProducts(products);
  };

  const remove = (id: number) => {
    let newProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].id !== id) {
        newProducts.push(products[i]);
      }
    }
    setProducts(newProducts);
  };

  const filteredProducts = () => {
    if (filter === "all") {
      return products;
    }
    if (filter === "archived") {
      return products.filter((product) => product.archived);
    }
    if (filter === "active") {
      return products.filter((product) => !product.archived);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={add}>Add Product</button>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="archived">Archived</option>
        <option value="active">Active</option>
      </select>
      <ul>
        {filteredProducts()?.map((product) => (
          <li key={product.id}>
            {product.title}
            <button onClick={() => remove(product.id)}>Delete</button>
            <button onClick={() => toggle(product.id)}>
              {product.archived ? "Unarchive" : "Archive"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
