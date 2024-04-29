import { prismaClient } from "../src/prisma-client";

describe('Prisma Client Execute Raw SQL', () => {
    it("should be able to execute raw sql insert data", async () => {
        const id = "1";
        const name = "Hardi";

        const impacted = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;
        expect(impacted).toBe(1);
    });
});
