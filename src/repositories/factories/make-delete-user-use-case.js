import { DeleteUserUseCase } from "../../use-cases/delete-user.js"
import { SequelizeUserRepository } from "../sequelize/sequelize-user-repository.js"

export function makeDeleteUserUseCase() {
  const userRepository = new SequelizeUserRepository()
  const deleteUserUseCase = new DeleteUserUseCase(userRepository)

  return deleteUserUseCase
}
