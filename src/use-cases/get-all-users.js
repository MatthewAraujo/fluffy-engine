import { SequelizeUserRepository } from "../repositories/sequelize/sequelize-user-repository.js";

export class GetAllUsersUseCase {
  constructor(){
  }

  async execute() {

    const usersRepository = new SequelizeUserRepository()

    const users = await usersRepository.getUsers()

    return {
      users,
    }
  }
}

