import styles from "./page.module.css";
import Product from "./components/product";
import { Divider, Grid } from "@mui/material";

export default function Home() {
  return (
    <section className={styles.home_section}>
      <h1 className={styles.title}>Nos produits</h1>
      <section className={styles.section_products}>
        <Grid className={styles.range_products}>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Grid>
        {/* <Divider /> */}
        <Grid className={styles.range_products}>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Grid>
        <Grid className={styles.range_products}>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Grid>
        <Grid className={styles.range_products}>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Grid>
      </section>
    </section>
  );
}
