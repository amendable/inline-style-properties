const fs = require('fs').promises;
const { all } = require('known-css-properties');
const camelCaseCss = require('camelcase-css');
const excludedList = ['src', 'alt'];

const VENDOR_REGEX = new RegExp('^-(webkit|moz|ms|o|apple|wap)-(.*)')

const updateData = async (data, fileName) => {
  console.log(`${fileName} items: ${data.length}`);

  const items = data
    .map(item => camelCaseCss(item))
    .filter(item => !excludedList.includes(item))
    .sort();

  await fs.writeFile(`${__dirname}/../src/${fileName}.json`, JSON.stringify(items));
}

(async () => {
  console.log(`Total items: ${all.length}`);
  await updateData(all.filter(item => !item.match(VENDOR_REGEX)), 'inlineStandardProperties');
  await updateData(all.filter(item => item.match(VENDOR_REGEX)), 'inlineVendorProperties');

  console.log('Finished updating data.');
})();
