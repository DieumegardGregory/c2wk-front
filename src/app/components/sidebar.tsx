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
    <Grid className={styles.sidebar}>
      <Grid>
        <p>Affiner par catégories</p>
      </Grid>
      <SimpleDialog
        children={
          <FormGroup>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </FormGroup>
        }
        open={open}
        onClose={handleClose}
      />
    </Grid>
  );
}
