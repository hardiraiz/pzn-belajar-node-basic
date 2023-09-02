import {EventEmitter} from 'events';

const emitter = new EventEmitter();

emitter.addListener('hello', (name) => {
    console.info('Hai,', name);
});
emitter.addListener('hello', (name) => {
    console.info('Halo,', name);
});

emitter.emit('hello', 'eko');
