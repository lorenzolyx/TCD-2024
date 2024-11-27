

export interface IProducts {
    id?: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    productsTypeId?: string;
    productsFramingId?: string;
}

export interface IProductsType {
    id?: string;
    name: string;
}


export interface IProductsFraming {
    id?: string;
    name: string;
}

export interface IProductsOrder {
    id?: string;
    orderDate: string;
    quantity: number;
    productsFramingId?: string;
    productsId?: string;
    productsTypeId?: string;
}
