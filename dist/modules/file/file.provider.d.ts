import { Connection } from 'typeorm';
import { File } from '../../entities/file.entity';
export declare const fileProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<File>;
    inject: string[];
}[];
