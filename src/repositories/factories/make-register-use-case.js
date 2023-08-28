import { SequelizeUserRepository } from "../sequelize/sequelize-user-repository.js"
import { RegisterUseCase } from "../../use-cases/register.js"

export function makeRegisterUseCase() {
  const userRepository = new SequelizeUserRepository()
  const registerUseCase = new RegisterUseCase(userRepository)

  return registerUseCase
}
