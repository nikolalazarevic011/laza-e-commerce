class Item {
    id: string;
    title: string;
    image: string;
    description: string;
    category: string;
    price: number;
    owner: string;

    constructor(
        ItemTitle: string,
        ItemDescription: string,
        ItemCategory: string,
        ItemPrice: number,
        ItemOwner: string,
        ItemImage: string
    ) {
        this.id = new Date().toISOString();
        (this.title = ItemTitle),
            (this.image = ItemImage),
            (this.description = ItemDescription),
            (this.category = ItemCategory),
            (this.price = ItemPrice),
            (this.owner = ItemOwner);
    }
}
export default Item;
