import { z } from "zod"
import {makeDeleteUserUseCase} from "../../../repositories/factories/make-delete-user-use-case.js"

export async function deleteUser(req, res) {
  const deleteUserBodySchema = z.object({
    email: z.string().email(),
  })

  const { email } = deleteUserBodySchema.parse(
    req.body,
  )


  try{
    const deleteUserUseCase = makeDeleteUserUseCase()
    deleteUserUseCase.execute({
      email,
    })



  }catch(error){
    return res.status(400).json({error: error.message})
  }

  return res.status(201).json({message: "User deleted"})
}