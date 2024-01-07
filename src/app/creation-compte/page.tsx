"use client";
import styles from "../page.module.css";
import { Button, Grid, TextField } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from "next/link";

export default function CreateAccountPage() {
  return (
    <section className={styles.formlogin_section}>
      <Grid className={styles.formlogin_container}>
        <Grid className={styles.formlogin_header}>
          <GroupsOutlinedIcon sx={{ fontSize: "100px", color: "black" }} />

          <h1 className={styles.formlogin_title}>Créer un compte</h1>
        </Grid>
        <Grid className={styles.formlogin_body}>
          <TextField id="outlined-basic" label="Prénom" variant="outlined" />
          <TextField id="outlined-basic" label="Nom" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Mot de passe"
            variant="outlined"
          />
          <Button variant="contained">Créer mon compte</Button>
        </Grid>
      </Grid>
    </section>
  );
}
