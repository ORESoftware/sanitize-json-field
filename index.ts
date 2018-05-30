#!/usr/bin/env node


const getCleanString = function(d: string){
  return String(d).replace(/'/g, '')
  .replace(/"/g, '')   // replace double quote char with nothing
  .replace(/\r?\n/g, ' ')  // replace any newline char with one space
  .replace(/[ ]+/,' ') // replace all whitespace with one space
  .replace(/\\/g, ''); // replace any backslash with nothing
};

process.stdin.resume().on('data', function (d) {
  process.stdout.write(getCleanString(d));
});


// process.stdout.write(getCleanString(`\n \n foo ''' \\\\' "`));

