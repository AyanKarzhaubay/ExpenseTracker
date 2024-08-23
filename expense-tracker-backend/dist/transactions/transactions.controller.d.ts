import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './create-transaction.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    createTransaction(createTransactionDto: CreateTransactionDto): Promise<import("./transaction.entity").Transaction>;
}
