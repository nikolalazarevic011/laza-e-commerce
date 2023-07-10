import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: theme.spacing(-4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Set the height of the container to fill the viewport
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    subtitle: {
        marginBottom: theme.spacing(5),
    },
    button: {
        marginTop: theme.spacing(3),
    },
}));

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h2" component="h1" className={classes.title}>
                Welcome to Laza
            </Typography>
            <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
            >
                Your one-stop destination for all your shopping needs
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/items"
                className={classes.button}
            >
                Explore Now
            </Button>
        </Container>
    );
};

export default Home;
