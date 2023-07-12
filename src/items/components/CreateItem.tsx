import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
    Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        margin: "0 auto",
        marginTop: theme.spacing(40),
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const CreateItem: React.FC = () => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform form submission logic here
        console.log("Form submitted!");
    };

    return (
        <Container>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    label="Image"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        onChange={(event) =>
                            setCategory(event.target.value as string)
                        }
                    >
                        <MenuItem value="PC">PC</MenuItem>
                        <MenuItem value="Laptop">Laptop</MenuItem>
                        <MenuItem value="SSD">SSD</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    type="number"
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default CreateItem;
