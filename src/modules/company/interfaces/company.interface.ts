export interface ICompany {
  id: string;
  name: string;
  email: string;
  website: string;
  address?: string;
  phone?: string;
  colorPalette: string;
  createdAt?: Date;
  updatedAt?: Date;
}
