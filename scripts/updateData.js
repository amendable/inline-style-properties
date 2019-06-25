const fs = require('fs').promises;
const { all } = require('known-css-properties');
const camelCaseCss = require('camelcase-css');

(async () => {
  const data = all.map(item => camelCaseCss(item)).sort();
  await fs.writeFile(`${__dirname}/../src/cssProperties.json`, JSON.stringify(data));
})();
