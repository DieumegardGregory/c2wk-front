import { PersonPinCircleOutlined } from "@mui/icons-material";
import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Children, ReactHTMLElement } from "react";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  children: React.ReactNode;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, children } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      {children}
    </Dialog>
  );
}
