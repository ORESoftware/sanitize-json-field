#!/usr/bin/env node
const getCleanString = function (d) {
    return String(d).replace(/'/g, '')
        .replace(/"/g, '')
        .replace(/\r?\n/g, ' ')
        .replace(/[ ]+/, ' ')
        .replace(/\\/g, '');
};
process.stdin.resume().on('data', function (d) {
    process.stdout.write(getCleanString(d));
});
