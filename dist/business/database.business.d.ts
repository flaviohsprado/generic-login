declare class DatabaseBusiness {
    constructor();
    createDatabase(databaseName: String): Promise<void>;
}
