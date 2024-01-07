"use client";
import { FormGroup, Grid, Link, TextField } from "@mui/material";
import styles from "../page.module.css";
import { useState } from "react";
import SimpleDialog from "./modal";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(!open);
  }

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <aside className={styles.sidebar}>
      <Grid>
        <p>Affiner par catégories</p>
      </Grid>
    </aside>
  );
}
