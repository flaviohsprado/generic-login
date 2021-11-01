export declare class CompanyDTO {
    id: string;
    name: string;
    email: string;
    website: string;
    address?: string;
    phone?: string;
    colorPalette: string;
    createdAt?: Date;
    updatedAt?: Date;
    constructor(props: Omit<CompanyDTO, 'id' | 'createdAt' | 'updatedAt'>, id?: string);
}
