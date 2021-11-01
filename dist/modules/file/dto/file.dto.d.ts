export declare class FileDTO {
    id: string;
    ownerId: string;
    ownerType: string;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: ArrayBuffer;
    key: string;
    url: string;
    constructor(props: Omit<FileDTO, 'id'>, id?: string);
    generateFileKey(): FileDTO;
}
