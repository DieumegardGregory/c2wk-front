"use client";
import Image from "next/image";
import { Button, Divider, Grid, Link } from "@mui/material";
import styles from "../page.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "../../../assets/Ultra_Ball_icon.png";
import AccountMenu from "./menuAccount";
import { useRouter, usePathname } from "next/navigation";
import CustomizedInputBase from "./searchbar";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Grid>
        <Link href="/" className={styles.logo_container}>
          <Image src={Logo} width={50} height={50} alt="Logo" />
          <p>Boutique Pokémons</p>
        </Link>
      </Grid>
      <CustomizedInputBase />
      <Grid className={styles.header_icons_container}>
        <Grid sx={{ cursor: "pointer" }}>
          <AccountMenu />
        </Grid>
        {pathname.includes("admin") || pathname.includes("connexion") ? null : (
          <>
            <Divider orientation="vertical" flexItem />
            <Button type="button" onClick={() => router.push("/panier")}>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Button>
          </>
        )}
      </Grid>
    </header>
  );
}
