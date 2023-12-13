import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class CreateUser1700333930058 implements MigrationInterface {
  name = 'CreateUser1700333930058';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // user
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'email', type: 'varchar', isUnique: true, isNullable: true },
          { name: 'password', type: 'varchar', isNullable: true },
          { name: 'branch', type: 'varchar', isNullable: true },
          { name: 'bank_account_no', type: 'varchar', isNullable: true },
          {
            name: 'citizen_identity_issue_at',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'citizen_identity_issue_date',
            type: 'timestamp',
            isNullable: true,
          },
          { name: 'citizen_identity_no', type: 'varchar', isNullable: true },
          { name: 'contract_expiry_date', type: 'timestamp', isNullable: true },
          {
            name: 'contract_first_sign_date',
            type: 'timestamp',
            isNullable: true,
          },
          { name: 'contractnda', type: 'varchar', isNullable: true },
          { name: 'contract_no', type: 'varchar', isNullable: true },
          { name: 'contract_note', type: 'varchar', isNullable: true },
          { name: 'contract_sign_date', type: 'timestamp', isNullable: true },
          { name: 'contract_status', type: 'varchar', isNullable: true },
          { name: 'contract_type', type: 'varchar', isNullable: true },
          { name: 'current_address', type: 'varchar', isNullable: true },
          { name: 'day_of_birth', type: 'varchar', isNullable: true },
          { name: 'department', type: 'varchar', isNullable: true },
          { name: 'department_group', type: 'varchar', isNullable: true },
          { name: 'employee_group', type: 'varchar', isNullable: true },
          { name: 'employee_id', type: 'varchar', isNullable: true },
          { name: 'full_name', type: 'varchar', isNullable: true },
          { name: 'gender', type: 'int', isNullable: true },
          { name: 'job_level', type: 'varchar', isNullable: true },
          { name: 'job_title', type: 'varchar', isNullable: true },
          { name: 'num_of_dependent', type: 'varchar', isNullable: true },
          { name: 'onboard_date', type: 'varchar', isNullable: true },
          { name: 'phone_no', type: 'varchar', isNullable: true },
          { name: 'place_of_origin', type: 'varchar', isNullable: true },
          { name: 'roleId', type: 'int', isNullable: true },
          { name: 'statusId', type: 'int', isNullable: true },
          { name: 'photoId', type: 'int', isNullable: true },
          { name: 'created', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          {
            name: 'updated',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          { name: 'deleted', type: 'timestamp', isNullable: true },
        ],
      }),
    );

    await queryRunner.createIndex(
      'users',
      new TableIndex({ columnNames: ['email'] }),
    );

    // roles
    await queryRunner.createTable(
      new Table({
        name: 'roles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'name', type: 'varchar' },
        ],
      }),
    );

    // users_roles
    await queryRunner.createTable(
      new Table({
        name: 'users_roles',
        columns: [
          { name: 'user_id', type: 'int', isPrimary: true },
          { name: 'role_id', type: 'int', isPrimary: true },
        ],
      }),
    );

    await queryRunner.createForeignKeys('users_roles', [
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'roles',
        onDelete: 'CASCADE',
      }),
    ]);

    // token
    await queryRunner.createTable(
      new Table({
        name: 'token',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'expired', type: 'boolean' },
          { name: 'revoked', type: 'boolean' },
          { name: 'token', type: 'varchar' },
          { name: 'user_id', type: 'int' },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'token',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users', // Thay đổi thành tên thực tế của bảng User entity
        onDelete: 'CASCADE',
      }),
    );

    // absent_request
    await queryRunner.createTable(
      new Table({
        name: 'absent_request',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'from_date', type: 'date', isNullable: true },
          { name: 'to_date', type: 'date', isNullable: true },
          { name: 'ip_remote', type: 'varchar', isNullable: true },
          { name: 'reason', type: 'varchar', isNullable: true },
          { name: 'request_type', type: 'varchar', isNullable: true },
          { name: 'status', type: 'varchar', isNullable: true },
          { name: 'type', type: 'varchar', isNullable: true },
          { name: 'created', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updated', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
        ],
      }),
    );

    // absent_approval
    await queryRunner.createTable(
      new Table({
        name: 'absent_approval',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'approval_date', type: 'date', isNullable: true },
          { name: 'approval_order', type: 'int', isNullable: true },
          { name: 'approval_id', type: 'varchar', isNullable: true },
          { name: 'note', type: 'varchar', isNullable: true },
          { name: 'status', type: 'varchar', isNullable: true },
          { name: 'absent_request_id', type: 'int', isNullable: true },
          { name: 'created', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updated', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'absent_approval',
      new TableForeignKey({
        columnNames: ['absent_request_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'absent_request',
        onDelete: 'CASCADE',
      }),
    );

    // absent_request_inform_tos
    await queryRunner.createTable(
      new Table({
        name: 'absent_request_inform_tos',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'absent_request_id', type: 'int', isNullable: true },
          { name: 'inform_to_id', type: 'int', isNullable: true },
        ],
      }),
    );

    await queryRunner.createForeignKeys('absent_request_inform_tos', [
      new TableForeignKey({
        columnNames: ['absent_request_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'absent_request',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['inform_to_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users', // Thay đổi thành tên thực tế của bảng User entity
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users_roles"`);
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "absent_request"`);
  }
}
