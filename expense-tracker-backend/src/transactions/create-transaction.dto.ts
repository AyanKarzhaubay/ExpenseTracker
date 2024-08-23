export class CreateTransactionDto {
  readonly date: string;
  readonly sum: number;
  readonly category: string;
  readonly comment?: string;
}
