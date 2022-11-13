/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

// read input.txt
const fs = require('fs');

const readableStream = fs.createReadStream(__dirname + '/input.txt', {
    highWaterMark: 15
});

const writeableStream = fs.createWriteStream(__dirname + '/output.txt');

readableStream.on('readable', () => {
    try {

        writeableStream.write(`${(readableStream.read())}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
        console.log(`catch an error when read stream =>` + error);
    }
});

readableStream.on('end', () => {
    console.log('Done');
    writeableStream.end();
});