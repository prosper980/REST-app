import { PrismaClient } from "@prisma/client";

type PasswordAndEmail = {
    userPassword? : string
    userEmail : boolean
    userId? : number
}

const emailFinder = async (userEmail : string): Promise<PasswordAndEmail> => {

    try {
        
        const prisma = new PrismaClient();

        const emailExist = await prisma.user.findUnique({
            where : {
                email : userEmail
            },
            select : {
                password : true,
                email : true,
                id : true
            }
        })

        if(!emailExist){
            return {
                userEmail : false
            }
        }

        return {
            userPassword : emailExist.password,
            userId : emailExist.id,
            userEmail : true
        }

    } catch (error) {
        console.log(error);
        return {
            userEmail :false
        }
    }

}

export default emailFinder;