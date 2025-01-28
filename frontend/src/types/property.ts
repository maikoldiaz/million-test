export interface PropertyImage {
    id: string;
    file: string;
}

export interface Property {
    id: string;
    name: string;
    address: string;
    price: number;
    codeInternal: string;
    year: number;
    ownerId: string;
    images: PropertyImage[];
}
