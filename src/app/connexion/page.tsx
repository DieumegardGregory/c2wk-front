"use client";
import styles from "../page.module.css";
import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Button, Grid, TextField } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from "next/link";
import { CredentialsInterface } from "../interfaces/interfaces";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState<CredentialsInterface>({
    mail: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { value } = e.target;
    setCredentials({
      ...credentials,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <section className={styles.formlogin_section}>
      <Grid className={styles.formlogin_container}>
        <Grid className={styles.formlogin_header}>
          <GroupsOutlinedIcon sx={{ fontSize: "100px", color: "black" }} />

          <h1 className={styles.formlogin_title}>Member login</h1>
        </Grid>
        <Grid className={styles.formlogin_body}>
          <TextField
            id="email"
            label="email"
            variant="outlined"
            name="mail"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="password"
            label="Mot de passe"
            variant="outlined"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>Se connecter</Button>
          <Link
            href="/creation-compte"
            className={styles.formlogin_create_account_link}
          >
            Vous n&#39;avez pas de compte ?
          </Link>
        </Grid>
      </Grid>
    </section>
  );
}
