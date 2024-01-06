import styles from "../page.module.css";
import { Button, Grid } from "@mui/material";
import { ArrowBack, Image } from "@mui/icons-material";
import Link from "next/link";

export default function Product() {
  return (
    <section>
      <Grid className={styles.breadcrumb}>
        <Link href="./">
          <ArrowBack />
        </Link>

        <p>Retour à la liste des produits</p>
      </Grid>
      <Grid className={styles.page_produit}>
        <Image sx={{ fontSize: "400px", color: "grey" }}></Image>
        <Grid
          container
          flexDirection="column"
          gap="32px"
          marginTop="50px"
          marginRight="50px"
        >
          <Grid container flexDirection="column" gap="16px">
            {" "}
            <h1>Nom du produit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              felis pellentesque, imperdiet nisl id, vehicula diam. Maecenas
              fringilla consequat ultrices. Vivamus sagittis maximus magna, sit
              amet ornare nulla finibus et. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Cras eros
              urna, lacinia vitae augue in, accumsan molestie nunc. Nam sed
              elementum velit. Duis commodo, ex non lacinia luctus, lorem erat
              aliquam nulla, in sodales felis dui nec urna. Praesent porttitor
              orci id odio bibendum vulputate.
            </p>
            <p>Prix €€</p>
          </Grid>

          <Button variant="contained" sx={{ width: "max-content" }}>
            Ajouter au panier
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
