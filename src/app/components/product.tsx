import { Grid } from "@mui/material";
import { Image } from "@mui/icons-material";
import styles from "../page.module.css";

export default function Product() {
  return (
    <Grid className={styles.home_product}>
      <Image></Image>
      <h3>Title product</h3>
      <p>Price €</p>
    </Grid>
  );
}
