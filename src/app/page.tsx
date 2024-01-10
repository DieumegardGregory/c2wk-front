"use client";
import styles from "./page.module.css";
import CardProduct from "./components/product";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as apiProductService from "./services/api-products-service";
import * as apiCategoryService from "./services/api-categories-service";
import { Product } from "./interfaces/product-interface";
import { Category } from "./interfaces/category-interface";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      setProducts(await apiProductService.getProducts());
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      setCategories(await apiCategoryService.getCategories());
    }
    getData();
  }, []);

  const openModal = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className={(styles.main, styles.homepage)}>
      <aside className={styles.sidebar}>
        <Grid
          container
          flexDirection="column"
          minWidth="max-content"
          marginRight="16px"
        >
          <h2 className={styles.sidebar_title}>Affiner par catégories</h2>
          <FormGroup>
            {categories.map((category: Category) => {
              return (
                <FormControlLabel
                  key={category.id_category}
                  control={<Checkbox />}
                  label={category.name_category}
                />
              );
            })}
          </FormGroup>
        </Grid>
        <Divider
          variant="middle"
          orientation="vertical"
          sx={{ height: "100vh" }}
        />
      </aside>

      <section className={styles.home_group_sections}>
        <section className={styles.section_products}>
          <h1 className={styles.title}>Our products</h1>
          <Grid className={styles.list_products}>
            {products.map((product: Product) => {
              return (
                <Link
                  href={`/products/${product.id_product}`}
                  key={product.id_product}
                >
                  <CardProduct
                    titre={product.name_product}
                    prix={`${product.price} €`}
                  ></CardProduct>
                </Link>
              );
            })}
          </Grid>
        </section>
        {/* <Divider variant="middle" />
        <Grid className={styles.addproduct_container}>
          <AddCircleOutlineIcon
            onClick={openModal}
            sx={{ fontSize: "60px", color: "black", cursor: "pointer" }}
          />
          <SimpleDialog
            // selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </Grid> */}
      </section>
    </main>
  );
}
