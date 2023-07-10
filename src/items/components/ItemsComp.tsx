import React from "react";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Item from "../../shared/models/Item";
import ItemDetail from "./ItemDetail";
const ItemsComp: React.FC<{ items: Item[] }> = (props) => {
    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {props.items.map((item) => (
                        <Grid item key={item.id} xs={12} md={6} lg={3}>
                            <Link
                                to={item.id}
                                style={{ textDecoration: "none" }}
                            >
                                <ItemDetail key={item.id} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default ItemsComp;
