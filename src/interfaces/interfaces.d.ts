interface Product{
    id: number;
    name: string;
    description: string;
    price: number;
}

type ProductProps = Omit<Product, "id">;