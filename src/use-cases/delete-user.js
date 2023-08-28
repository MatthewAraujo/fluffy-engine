import { SequelizeUserRepository } from "../repositories/sequelize/sequelize-user-repository.js";

export class DeleteUserUseCase {
  constructor(){
  }

  async execute({
    email,
  }) {

    const pacienteRepository = new SequelizeUserRepository()


    const paciente = await pacienteRepository.deleteUser({
      email,
    })

    return {
      paciente,
    }
  }
}

