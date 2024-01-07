"use client";
import styles from "../page.module.css";
import { Button, Grid, TextField } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className={styles.formlogin_section}>
      <Grid className={styles.formlogin_container}>
        <Grid className={styles.formlogin_header}>
          <GroupsOutlinedIcon sx={{ fontSize: "100px", color: "black" }} />

          <h1 className={styles.formlogin_title}>Member login</h1>
        </Grid>
        <Grid className={styles.formlogin_body}>
          <TextField
            id="outlined-basic"
            label="Identifiant"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Mot de passe"
            variant="outlined"
          />
          <Button variant="contained">Se connecter</Button>
          <Link
            href="/creation-compte"
            className={styles.formlogin_create_account_link}
          >
            Vous n'avez pas de compte ?
          </Link>
        </Grid>
      </Grid>
    </section>
  );
}
