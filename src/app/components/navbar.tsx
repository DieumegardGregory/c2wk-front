"use client";

import { Divider, Grid, Link, Typography } from "@mui/material";
import styles from "../page.module.css";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <Grid
        container
        flexDirection="row"
        gap="5px"
        alignItems="center"
        padding={1}
      >
        <Typography>Promos</Typography>
        <Divider
          sx={{ height: 18, m: 0.5, borderColor: "white" }}
          orientation="vertical"
        />
        <Typography>Nouveautés</Typography>
      </Grid>
    </nav>
  );
}
