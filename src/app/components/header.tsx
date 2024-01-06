"use client";
import Image from "next/image";
import { Avatar, Divider, Grid } from "@mui/material";
import SimpleDialog from "./modal";
import styles from "../page.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import Logo from "../../../assets/Ultra_Ball_icon.png";
import PersonIcon from "@mui/icons-material/Person";
import AccountMenu from "./menuAccount";

export default function Header() {
  return (
    <header className={styles.header}>
      <Grid className={styles.logo_container}>
        <Image src={Logo} width={50} height={50} alt="Logo" />
        <p>Boutique Pokémons</p>
      </Grid>
      <Grid className={styles.header_icons_container}>
        <Grid sx={{ cursor: "pointer" }}>
          <AccountMenu />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Grid>
    </header>
  );
}
