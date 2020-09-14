import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRespository = getRepository(Transaction);

    const transactionExists = await transactionRespository.findOne(id);

    if (transactionExists) {
      await transactionRespository.remove(transactionExists);
    } else {
      throw new AppError('Transaction does not exists');
    }
  }
}

export default DeleteTransactionService;
