import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";
import { Construction } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
    backButton: {
        marginTop: theme.spacing(2),
    },
}));

const UnderConstructionPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

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
            <Button
                variant="contained"
                color="primary"
                className={classes.backButton}
                onClick={handleGoBack}
            >
                Go Back
            </Button>
        </Container>
    );
};

export default UnderConstructionPage;
