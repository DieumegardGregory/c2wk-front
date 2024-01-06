"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { Button, Grid, TextField } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className={styles.formlogin}>
      <Grid>
        <GroupsOutlinedIcon sx={{ fontSize: "100px", color: "black" }} />
      </Grid>
      <h1 className={styles.formlogin_title}>Member login</h1>
      <Grid className={styles.formlogin_content}>
        <TextField id="outlined-basic" label="Identifiant" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Mot de passe"
          variant="outlined"
        />
        <Button variant="contained">Se connecter</Button>
        <Link href={"link"} className={styles.formlogin_create_account_link}>
          Vous n'avez pas de compte ?
        </Link>
      </Grid>
    </section>
  );
}
