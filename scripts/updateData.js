const fs = require('fs').promises;
const { all } = require('known-css-properties');
const camelCaseCss = require('camelcase-css');
const excludedList = ['src', 'alt'];

(async () => {
  const data = all
    .map(item => camelCaseCss(item))
    .filter(item => !excludedList.includes(item))
    .sort();

  await fs.writeFile(`${__dirname}/../src/inlineProperties.json`, JSON.stringify(data));
})();
