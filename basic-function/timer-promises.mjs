import timers from 'timers/promises';

// console.info(new Date());
// const name = await timers.setTimeout(3000, 'NodeJS');
// console.info(`${name} at ${new Date()}`);

for await (const startTime of timers.setInterval(1000)){
    console.info(`Start time at ${new Date()}`);
}
