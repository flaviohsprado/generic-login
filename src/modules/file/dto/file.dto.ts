import { uuid } from 'uuidv4';

export class FileDTO {
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

  constructor(props: Omit<FileDTO, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  public generateFileKey(): FileDTO {
    const name = this.originalname.split('.')[0];
    this.key = `${this.id}.${name}`;
    return this;
  }
}
