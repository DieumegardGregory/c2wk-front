import styles from "../page.module.css";
import { Button, Divider, Grid } from "@mui/material";
import { ArrowBack, Image } from "@mui/icons-material";
import Link from "next/link";
import CartItem from "../components/cart-item";

export default function CartPage() {
  return (
    <main className={styles.main_page_cart}>
      <Grid className={styles.breadcrumb}>
        <Link href="./">
          <ArrowBack />
        </Link>
        <p>Retourner à la liste des produits</p>
      </Grid>

      <Grid className={styles.cart_section_wrapper}>
        <section className={styles.cart_section_details}>
          <h2>Détail de votre panier</h2>
          <Divider></Divider>
          <Grid className={styles.cart_section_details_content}>
            <CartItem />
            <Divider />
            <CartItem />
            <Divider />
            <CartItem />
          </Grid>
        </section>
        <section className={styles.cart_section_resume}>
          <h2>Résumé de votre commande</h2>
          <Grid className={styles.cart_section_resume_content}>
            <p>X items</p>
            <Divider></Divider>
            <Grid className={styles.cart_section_resume_list_items}>
              <Grid className={styles.cart_section_resume_list_items_row}>
                <p>Nom produit</p>
                <p>Prix €</p>
              </Grid>
              <Grid className={styles.cart_section_resume_list_items_row}>
                <p>Nom produit</p>
                <p>Prix €</p>
              </Grid>
              <Divider></Divider>
              <p>TOTAL</p>
              <p>Prix €</p>
            </Grid>
          </Grid>
          <Button variant="outlined">Commander</Button>
        </section>
      </Grid>
    </main>
  );
}
