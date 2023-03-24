import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try {
        const res = await prisma.youtube_channels.create({
            data: {
                name: "Somprog1",
                description: 'This is youtube channel1',
                link: 'https://youtube.com/somprog1',
                subscribers: 232
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