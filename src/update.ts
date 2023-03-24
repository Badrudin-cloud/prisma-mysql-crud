import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try {
        const res = await prisma.youtube_channels.update({
            where: {
                id: 1
            },
            data: {
                name: 'SomProg channel'
            }
        });

        console.log(res);
        
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect()
    }
}

main();