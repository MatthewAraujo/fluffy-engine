export class SequelizeUserRepository{

  user = []

  async deleteUser(email){
    const user = this.user.find(user => user.email === email)
    if(!user){      throw new Error("User not found")
    }
    const index = this.user.indexOf(user)

    this.user.splice(index,1)
  }

  async create(
      name,
      email,
      password,
    ){

    const user = {
      name,
      email,
      password,
    }

    this.user.push(user.name, user.email, user.password)

    console.log(this.user)

    return {
      user,
    }
  }

  async getUsers(){
    return this.user
  }
}