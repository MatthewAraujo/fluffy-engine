import { GetAllUsersUseCase } from "../../use-cases/get-all-users.js"
import { SequelizeUserRepository } from "../sequelize/sequelize-user-repository.js"

export function makeGetAllUserUserUseCase() {
  const userRepository = new SequelizeUserRepository()
  const getAllUserUseCase = new GetAllUsersUseCase(userRepository)

  return getAllUserUseCase
}
