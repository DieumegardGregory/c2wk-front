'use client'
import React from "react";
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

type CategoryFormComponentProps = {
    addCategory: (name: string) => void;
    activeTab: number;
    updateCategory: (id: number, name: string) => void;
    selectedCategoriesIDs: number[];
}

export default function CategoryForm({ addCategory, activeTab, updateCategory, selectedCategoriesIDs }: CategoryFormComponentProps) {
    const [categoryName, setCategoryName] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (activeTab === 1) {
          addCategory(categoryName)
        }
        if (activeTab === 2) {
          updateCategory(selectedCategoriesIDs[0], categoryName);
        }
    }

    return (
        <Box
        sx={{ display: 'flex', flexDirection: 'column'}}
        component="form"
        >
            <h4>{activeTab === 1 ? 'Add ' : 'Update '}a category</h4>
          <TextField
            sx={{ m: '20px' }}
            id="category_name"
            label="Category"
            variant="outlined"
            name="category_name"
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={(e) => handleSubmit(e)}
            disabled={selectedCategoriesIDs.length === 0}
          >
            {activeTab === 1 ? 'Add' : 'Update'}  
          </Button>
        </Box>
    )
};