function samplePromises() {
    return Promise.resolve("Hello, world");
}

const data = await samplePromises();
console.info(data);
