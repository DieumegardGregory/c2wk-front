"use client";
import styles from "./page.module.css";
import CardProduct from "./components/product";
import { Divider, Grid } from "@mui/material";
import Sidebar from "./components/sidebar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SimpleDialog from "./components/modal";
import { useState } from "react";
import Link from "next/link";
import listeProduits from "./mock/data-mock.json";

export default function Home() {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(!open);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const { products } = listeProduits;

  return (
    <Grid className={styles.homepage}>
      <Sidebar />
      <section className={styles.home_group_sections}>
        <section className={styles.section_products}>
          <h1 className={styles.title}>Nos produits</h1>
          <Grid className={styles.list_products}>
            {products.map(function (produit) {
              return (
                <Link href="/product">
                  <CardProduct
                    titre={produit.name}
                    prix={`${produit.prix} €`}
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
    </Grid>
  );
}
