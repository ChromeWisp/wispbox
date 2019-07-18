const path = require('path');
const fs = require('fs');
const program = require('commander');

const ENCODING = 'utf-8';

let componentPath = null;
program
  .version('0.1.0')
  .arguments('<path>')
  .action(p => componentPath = p)
  .parse(process.argv);

if(!componentPath) {
  console.error('ERROR: Component path is required');
  process.exit(1);
}

const componentTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'Component.svelte'), ENCODING);
const testTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'Component.spec.js'), ENCODING);

const NAME = path.basename(componentPath);

const replaceParams = content => content
  .replace(/NAME/g, NAME);

const SRC_PATH = path.join('src', `${componentPath}.svelte`);
const TEST_PATH = path.join('test', `${componentPath}.spec.js`);

fs.writeFileSync(SRC_PATH, replaceParams(componentTemplate));
fs.writeFileSync(TEST_PATH, replaceParams(testTemplate));

console.log(`${NAME} created successfully!`);
