"use client";
import styles from "./page.module.css";
import CardProduct from "./components/product";
import { Divider, Grid } from "@mui/material";
import Sidebar from "./components/sidebar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SimpleDialog from "./components/modal";
import { useEffect, useState } from "react";
import Link from "next/link";
import listeProduits from "./mock/data-mock.json";
import { getProducts } from "./services/api-services";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      setProducts(await getProducts());
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
  interface Produit {
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
          <h1 className={styles.title}>Nos produits</h1>
          <Grid className={styles.list_products}>
            {products.map(function (produit: Produit) {
              return (
                <Link href="/product" key={produit.id_product}>
                  <CardProduct
                    titre={produit.name_product}
                    prix={`${produit.price} €`}
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
