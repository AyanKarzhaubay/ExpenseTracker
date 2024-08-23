import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from './transactions/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'expense-tracker.db',
      entities: [Transaction],
      synchronize: true,
    }),
    TransactionsModule,
  ],
})
export class AppModule {}
