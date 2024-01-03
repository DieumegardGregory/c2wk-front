// import Image from "next/image";
"use client";
import { Avatar, Grid } from "@mui/material";
import SimpleDialog from "./modal";
import styles from "../page.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(!open);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={styles.header}>
      <p>HEADER</p>
      <p>Log In</p>
      <p>Log Out</p>
      <Grid onClick={openModal} sx={{ cursor: "pointer" }}>
        <Avatar src="/broken-image.jpg" />
      </Grid>
      <SimpleDialog
        // selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <ShoppingCartOutlinedIcon />
    </Grid>
  );
}
