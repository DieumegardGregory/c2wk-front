"use client";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import * as apiCategoryService from "../services/api-categories-service";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [checkboxSelected, setCheckboxSelected] = useState(true);

  useEffect(() => {
    async function getData() {
      setCategories(await apiCategoryService.getCategories());
    }
    getData();
  }, []);

  // TODO: sortir dans les interfaces
  interface Category {
    id_category: number;
    name_category: string;
  }

  const selectCheckboxFunction = () => {
    setCheckboxSelected(!checkboxSelected);
    console.log("checkboxSelected", checkboxSelected);
  };

  return (
    <aside className={styles.sidebar}>
      <Grid>
        <h2 className={styles.sidebar_title}>Affiner par catégories</h2>
        <FormGroup>
          {categories.map((category: Category) => {
            return (
              <FormControlLabel
                key={category.id_category}
                control={<Checkbox />}
                label={category.name_category}
                onChange={selectCheckboxFunction}
              />
            );
          })}
        </FormGroup>
      </Grid>
    </aside>
  );
}
