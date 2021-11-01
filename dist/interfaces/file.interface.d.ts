export interface IFile {
    id: string;
    ownerId: string;
    ownerType: string;
    key: string;
    url: string;
}
export interface IUploadedFile {
    path: string;
}
export interface IFileUploader {
    upload: (files: IFile[]) => Promise<IUploadedFile | IUploadedFile[] | undefined>;
}
