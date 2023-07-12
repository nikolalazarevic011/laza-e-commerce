import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    CardActions,
    Container,
} from "@material-ui/core";
import Item from "../../shared/models/Item";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(2),
    },
    media: {
        width: "100%",
        height: 0,
        paddingTop: "56.25%", // 16:9 aspect ratio
    },
}));

const ItemDetail: React.FC<{ item: Item }> = (props) => {
    const classes = useStyles();

    return (
        <Container>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.item.image}
                    title={props.item.title}
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {props.item.description}
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        Price: ${props.item.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Category: {props.item.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        ID: {props.item.id}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">
                        EDIT
                    </Button>
                    <Button variant="contained" size="small">
                        DELETE
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default ItemDetail;
