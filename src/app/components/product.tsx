import { Grid } from "@mui/material";
import { Image } from "@mui/icons-material";
import styles from "../page.module.css";

interface CardProductProps {
  titre: string;
  prix: string;
}

export default function CardProduct(props: CardProductProps) {
  const { titre, prix } = props;
  return (
    <Grid className={styles.vignette_product}>
      <Image fontSize="large"></Image>
      <h3>{titre}</h3>
      <p>{prix}</p>
    </Grid>
  );
}
