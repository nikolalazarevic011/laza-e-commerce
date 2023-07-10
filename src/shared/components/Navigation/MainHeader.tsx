import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
        textDecoration: "none",
        color: "inherit",
    },
    rightSection: {
        display: "flex",
        alignItems: "center",
    },
    adminLoginButton: {
        marginRight: theme.spacing(2),
    },
    activeLink: {
        fontWeight: "bold",
        textDecoration: "underline",
    },
}));

const MainHeader: React.FC = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    className={`${classes.title} ${
                        location.pathname === "/items" ? classes.activeLink : ""
                    }`}
                    component={Link}
                    to="/items"
                >
                    Browse
                </Typography>

                <Typography
                    variant="h6"
                    className={classes.title}
                    component={Link}
                    to="/categories"
                >
                    Categories
                </Typography>
                <Typography
                    variant="h6"
                    className={classes.title}
                    component={Link}
                    to="/about"
                >
                    About
                </Typography>
                <div className={classes.rightSection}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.adminLoginButton}
                        component={Link}
                        to="/admin-login"
                    >
                        Admin Login
                    </Button>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default MainHeader;
