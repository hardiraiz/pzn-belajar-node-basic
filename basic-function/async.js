// akan error jika langsung memanggil funtion ini dengan await harus membuat async function baru 
function samplePromises() {
    return Promise.resolve("Hello, world");
}

async function run() {
    const data = await samplePromises();
    console.info(data);
}

run();
