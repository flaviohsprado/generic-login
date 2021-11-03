import { Inject, Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class DatabaseService {
  public async createDatabase(): Promise<void> {
    const connection = getConnection();

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${connection.options.database}`,
    );
  }
}
