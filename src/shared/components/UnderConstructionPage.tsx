import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import { Construction } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
    icon: {
        fontSize: 120,
        marginBottom: theme.spacing(2),
    },
}));

const UnderConstructionPage = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Construction className={classes.icon} />
            <Typography variant="h5" component="h1" align="center">
                Under Construction
            </Typography>
            <Typography variant="body1" align="center">
                We're working on something awesome. <br /> Please check back
                later.
            </Typography>
        </Container>
    );
};

export default UnderConstructionPage;
