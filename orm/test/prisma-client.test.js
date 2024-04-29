import {PrismaClient} from '@prisma/client';

describe('Prisma Client', () => {
    it('should be able to connect database', async () => {
        const prisma = new PrismaClient();
        await prisma.$connect();
        
        // doing something

        // end of doing something

        await prisma.$disconnect();
    })
});
