import { Connection } from 'typeorm';
import { Company } from '../../entities/company.entity';
export declare const companyProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Company>;
    inject: string[];
}[];
