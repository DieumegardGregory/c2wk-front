"use client";
import React from "react";
import { useState } from "react";
import styles from "../page.module.css";
import { Button, Grid, TextField } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from "next/link";
import { UserInfosInterface } from "../interfaces/interfaces";
import { register } from "../services/auth.services";

export default function CreateAccountPage() {
  const [userInfos, setUserInfos] = useState<UserInfosInterface>({
    mail: '',
    password: '',
    firstname: '',
    lastname: '',
  })

  const handleChange = (e: any) => {
    const { value } = e.target;
    setUserInfos({
      ...userInfos,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    register(userInfos);
  }

  return (
    <section className={styles.formlogin_section}>
      <Grid className={styles.formlogin_container}>
        <Grid className={styles.formlogin_header}>
          <GroupsOutlinedIcon sx={{ fontSize: "100px", color: "black" }} />

          <h1 className={styles.formlogin_title}>Créer un compte</h1>
        </Grid>
        <Grid className={styles.formlogin_body}>
          <TextField
            id="firstname"
            label="Prénom"
            variant="outlined"
            name="firstname"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="lastname"
            label="Nom"
            variant="outlined"
            name="firstname"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="mail"
            label="Email"
            variant="outlined"
            name="firstname"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="password"
            label="Mot de passe"
            variant="outlined"
            name="firstname"
            onChange={(e) => handleChange(e)}
          />
          <Button
            variant="contained"
            onClick={(e) => handleSubmit(e)}
          >
            Créer mon compte
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
