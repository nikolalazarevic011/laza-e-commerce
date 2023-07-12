import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
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
const ItemCard: React.FC<{ item: Item }> = (props) => {
    const classes = useStyles();

    return (
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

                <Typography variant="h6" color="textPrimary">
                    Price: ${props.item.price}
                </Typography>
                <CardActions>
                    <Button variant="contained" size="small">
                        +
                    </Button>
                    {/* //! dynamic from context */}
                    <p>{0}</p>
                    <Button variant="contained" size="small">
                        -
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default ItemCard;
