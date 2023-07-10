import React, { useState } from "react";
import Items from "../components/ItemsComp";
import Item from "../../shared/models/Item";

const dummyProducts = [
    {
        title: "Product 1",
        description: "This is the description of product 1",
        image: "https://example.com/image1.jpg",
        price: 9.99,
        category: "Category 1",
        id: "676587658765",
        owner: "u2",
    },
    {
        title: "Product 2",
        description: "This is the description of product 2",
        image: "https://example.com/image2.jpg",
        price: 19.99,
        category: "Category 2",
        id: "556654654",
        owner: "u1",
    },
    {
        title: "Product 3",
        description: "This is the description of product 3",
        image: "https://example.com/image3.jpg",
        price: 14.99,
        category: "Category 1",
        id: "67658hhjgjhy",
        owner: "u1",
    },
    // Add more products as needed
];

const ItemsPage: React.FC = () => {
    // const [items, setItems] = useState([
    //     {
    //         title: "Product 1",
    //         description: "This is the description of product 1",
    //         image: "https://example.com/image1.jpg",
    //         price: 9.99,
    //         category: "Category 1",
    //         id: "676587658765",
    //         owner: "u2",
    //     },
    //     {
    //         title: "Product 2",
    //         description: "This is the description of product 2",
    //         image: "https://example.com/image2.jpg",
    //         price: 19.99,
    //         category: "Category 2",
    //         id: "556654654",
    //         owner: "u1",
    //     },
    //     {
    //         title: "Product 3",
    //         description: "This is the description of product 3",
    //         image: "https://example.com/image3.jpg",
    //         price: 14.99,
    //         category: "Category 1",
    //         id: "67658hhjgjhy",
    //         owner: "u1",
    //     },
    //     {
    //         title: "Product 4",
    //         description: "This is the description of product 4",
    //         image: "https://example.com/image4.jpg",
    //         price: 14.99,
    //         category: "Category 1",
    //         id: "67658hhooopjgjhy",
    //         owner: "u1",
    //     },
    //     // Add more products as needed
    // ]);
    return (
        <>
            <Items items={dummyProducts} />
        </>
    );
};

export default ItemsPage;
