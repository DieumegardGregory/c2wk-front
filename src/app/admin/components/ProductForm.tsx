"use client";
import React from "react";
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { ProductPostPayload } from "@/app/interfaces/product-interface";

type ProductFormComponentProps = {
  addProduct: (newProduct: ProductPostPayload) => void;
  activeTab: number;
  updateProduct: (id: number, newProduct: ProductPostPayload) => void;
  selectedProductsIDs: number[];
};

export default function ProductForm({
  addProduct,
  activeTab,
  updateProduct,
  selectedProductsIDs,
}: ProductFormComponentProps) {
  const [newProduct, setNewProduct] = useState<ProductPostPayload>({
    nameProduct: null,
    price: null,
    picture: null,
    description: null,
    category: null,
  });
  const [productName, setProductName] = useState<string | null>(null);
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [productPicture, setProductPicture] = useState<string | null>(null);
  const [productDescription, setProductDescription] = useState<string | null>(
    null
  );
  const [productCategory, setProductCategory] = useState<string | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (activeTab === 1) {
      const newProduct = {
        nameProduct: productName,
        price: productPrice,
        picture: productPicture,
        description: productDescription,
        category: productCategory,
      };
      addProduct(newProduct);
    }
    if (activeTab === 2) {
      updateProduct(selectedProductsIDs[0], newProduct);
    }
  };

  const checkFormValidity = () => {
    return (
      productName &&
      productName?.length > 0 &&
      productPrice &&
      productPicture &&
      productPicture?.length > 0 &&
      productDescription &&
      productDescription?.length > 0 &&
      productCategory &&
      productCategory?.length > 0
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} component="form">
      <h4>{activeTab === 1 ? "Add " : "Update "}a product</h4>
      <TextField
        sx={{ m: "20px" }}
        id="product-name"
        label="Name"
        variant="outlined"
        name="product-name"
        onChange={(e) => setProductName(e.target.value)}
      />
      <TextField
        sx={{ m: "20px" }}
        id="product-price"
        label="Price"
        variant="outlined"
        name="product-price"
        onChange={(e) => setProductPrice(+e.target.value)}
      />
      <TextField
        sx={{ m: "20px" }}
        id="product-picture"
        label="Picture"
        variant="outlined"
        name="product-picture"
        onChange={(e) => setProductPicture(e.target.value)}
      />
      <TextField
        sx={{ m: "20px" }}
        id="product-description"
        label="Description"
        variant="outlined"
        name="product-description"
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <TextField
        sx={{ m: "20px" }}
        id="product-category"
        label="Category"
        variant="outlined"
        name="product-category"
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={(e) => handleSubmit(e)}
        disabled={activeTab !== 1 && !checkFormValidity()}
      >
        {activeTab === 1 ? "Add" : "Update"}
      </Button>
    </Box>
  );
}
