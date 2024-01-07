"use client";
import styles from "../page.module.css";
import { Button, Grid } from "@mui/material";
import { Image } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItem() {
  const deleteItem = () => {};

  return (
    <Grid className={styles.vignette_cart_item}>
      <Image sx={{ fontSize: "120px" }}></Image>
      <Grid className={styles.vignette_cart_item_content}>
        <Grid className={styles.vignette_cart_item_body}>
          <Grid item>
            <h3>Titre</h3>
          </Grid>
          <Grid item>
            <p className={styles.vignette_cart_item_description}>
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
          </Grid>
        </Grid>
        <Grid>
          <p>Prix €€</p>
        </Grid>
        <Grid>
          <Button sx={{ margin: "0", padding: "0" }} onClick={deleteItem}>
            <DeleteIcon fontSize="small" />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
