"use client";
import React from "react";
import { useState } from "react";
import styles from "../../page.module.css";
import { Button, Grid, TextField, Typography, Box, Icon } from "@mui/material";
import { AddCircleOutline, UpdateOutlined, DeleteOutline } from "@mui/icons-material";

export default function ArticlesPage() {
    const [openedForm, setOpenedForm] = useState<number>(0);

    const handleChipClick = (n: number) => {
      setOpenedForm(n);
    }
    return (
        <Box sx={{ height: '80%', width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px', m: 'auto'}}>
            <h3 className="admin_h3">Manage your articles here</h3>
            <Typography>What&#39;s your mood today ?</Typography>
            <Box sx={{ height: '60px', width: '60%', display: 'grid', gridTemplateColumns: '30% 30% 30%', gap: '1%', m: "20px" }}>
                <Button
                variant="outlined"
                className={styles.admin_chip}
                onClick={() => handleChipClick(1)}
                >
                    <Icon fontSize="small" sx={{ height: '25px', width: '25px' }}>
                        <AddCircleOutline />
                    </Icon>
                    Add
                </Button>
                <Button
                  variant="outlined"
                  className={styles.admin_chip}
                  onClick={() => handleChipClick(2)}
                >
                    <Icon fontSize="small" sx={{ height: '25px', width: '25px' }}>
                        <UpdateOutlined />
                    </Icon>
                    Update
                </Button>
                <Button
                  variant="outlined"
                  className={styles.admin_chip}
                  onClick={() => handleChipClick(3)}
                  >
                    <Icon fontSize="small" sx={{ height: '25px', width: '25px' }}>
                        <DeleteOutline />
                    </Icon>
                    Delete
                </Button>
            </Box>
            
        </Box>
    )
}