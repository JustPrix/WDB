const langs = require('langs');
const colors = require('colors');
const franc = require('franc');

const input = process.argv[2];

try {
  const code = franc(input);
  const language = langs.where('3', code).name;
  console.log(`Our best guess is: ${language.green}`);
} catch (e) {
  console.log(
    'Could not match a language. Please try again with a larger sample!'.red
  );
}
