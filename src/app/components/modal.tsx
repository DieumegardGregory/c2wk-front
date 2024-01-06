import { PersonPinCircleOutlined } from "@mui/icons-material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";
import { Children, ReactHTMLElement } from "react";
import styles from "../page.module.css";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <Grid className={styles.form_addproduct_content}>
        <h3 className={styles.form_addproduct_title}>Nouveau produit</h3>
        <TextField
          id="outlined-basic"
          label="Nom du produit"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Description du produit"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Prix du produit"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Sélectionner une image"
          variant="outlined"
        />

        <Button variant="contained">Ajouter produit</Button>
      </Grid>
    </Dialog>
  );
}
