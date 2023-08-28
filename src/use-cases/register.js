import { SequelizeUserRepository } from "../repositories/sequelize/sequelize-user-repository.js";

export class RegisterUseCase {
  constructor(){
  }

  async execute({
    name,
      email,
      password,
  }) {

    const userRepository = new SequelizeUserRepository()


    const user = await userRepository.create({
      name,
      email,
      password,
    })

    return {
      user,
    }
  }
}

