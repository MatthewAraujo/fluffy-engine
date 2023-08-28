import { makeGetAllUserUserUseCase } from "../../../repositories/factories/make-get-all-users-use-case.js"

export async function getUsers(res, req) {
  

  try{
    const getAllUserUseCase = makeGetAllUserUserUseCase()

    const response = await getAllUserUseCase.execute()

    return res.status(201).json(response)
  }catch(error){
    return res.status(400).json({error: error.message})
  }

}