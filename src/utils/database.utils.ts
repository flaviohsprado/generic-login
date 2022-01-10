import { CompanyService } from '../modules/company/company.service';
import { CompanyDTO } from '../modules/company/dto/company.dto';
import {
  ConnectionOptions,
  getConnectionOptions,
  getConnection,
  QueryRunner,
  createConnections,
  createConnection,
} from 'typeorm';
import {
  buildConnectionOptions,
  createDatabase,
  dropDatabase,
} from 'typeorm-extension';

export class DatabaseUtils {
  constructor(private companyRepository: CompanyService) {}

  public async checkIfCreateNewDatabase(companyName: string): Promise<void> {
    const companys = await this.companyRepository.findAll();

    if (!companys.find((company) => company.name === companyName)) {
      await this.createNewCompany(companyName);
      this.createDatabaseIfNotExists(companyName);
    }
  }

  public async createDatabaseIfNotExists(companyName: string): Promise<void> {
    const connectionOptions: ConnectionOptions = await getConnectionOptions();

    const newConnectionOptions = { ...connectionOptions };
    newConnectionOptions.database = `${companyName}`.trim();

    // Create database with connection specification
    await createDatabase(
      { ifNotExist: true, characterSet: 'UTF8' },
      newConnectionOptions,
    );

    /* TODO - Add new database options in ormconfig.json */
    const connection = await createConnection(newConnectionOptions.database);

    await connection.synchronize(true);

    await connection.runMigrations({
      transaction: 'all',
    });

    // or without manually specification
    //await createDatabase({ ifNotExist: true });

    // Drop Database with connection specification
    //await dropDatabase(undefined, connectionOptions);

    // or without manually specification
    //await dropDatabase({ ifExist: true });
  }

  private async createNewCompany(companyName: string): Promise<void> {
    const company = new CompanyDTO({ name: companyName });
    await this.companyRepository.create(company);
  }
}
