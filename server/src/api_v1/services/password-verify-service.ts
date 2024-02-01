import { PrismaClient } from "@prisma/client";

const passwordVerify = async( {email, password} ) => {

    try {
        
        const prisma = new PrismaClient();

        const password = await prisma.user.findUnique({
            where : {
                email : email
            },
            select: {
                password : true
            }
        })

        return password

    } catch (error) {
        console.log(error);
        return false;
    }
}

export default passwordVerify;