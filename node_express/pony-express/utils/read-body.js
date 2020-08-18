'use strict';

const readBody = (req) =>
    new Promise(resolve => {
        const chunks = [];

        req.on('data', (chunk) => {
            console.log('chunk: ', chunk.toString());
            chunks.push(chunk);
        });

        req.on('end', () => {
            resolve(Buffer.concat(chunks));
        });
    });

module.exports = readBody;
