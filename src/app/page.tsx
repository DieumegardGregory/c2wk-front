"use client";
import styles from "./page.module.css";
import CardProduct from "./components/product";
import { Divider, Grid } from "@mui/material";
import Sidebar from "./components/sidebar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SimpleDialog from "./components/modal";
import { useEffect, useState } from "react";
import Link from "next/link";
import listeproducts from "./mock/data-mock.json";
import * as apiProductService from "./services/api-products-service";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      setProducts(await apiProductService.getProducts());
    }
    getData();
  }, []);

  function openModal() {
    setOpen(!open);
  }

  const handleClose = () => {
    setOpen(false);
  };
  // TODO: sortir dans les interfaces
  interface Product {
    id_product: number;
    name_product: string;
    price: number;
    picture: string;
    description: string;
  }

  return (
    <main className={(styles.main, styles.homepage)}>
      <Sidebar />
      <section className={styles.home_group_sections}>
        <section className={styles.section_products}>
          <h1 className={styles.title}>Nos products</h1>
          <Grid className={styles.list_products}>
            {products.map(function (product: Product) {
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
        <Divider variant="middle" />
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
        </Grid>
      </section>
    </main>
  );
}
