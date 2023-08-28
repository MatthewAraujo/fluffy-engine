import { z } from "zod"
import {makeRegisterUseCase} from "../../../repositories/factories/make-register-use-case.js"

export async function register(req, res) {
  const registerBodySchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
  })

  const { name, email, password } = registerBodySchema.parse(
    req.body,
  )


  try{
    const registerUseCase = makeRegisterUseCase()
    const user = registerUseCase.execute({
      name,
      email,
      password,
    })

    return res.status(201).json(user)


  }catch(error){
    return res.status(400).json({error: error.message})
  }

}