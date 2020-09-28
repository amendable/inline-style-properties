import memoize from 'mem';
import inlineStandardProperties from './inlineStandardProperties.json';
import inlineVendorProperties from './inlineVendorProperties.json';

const fn = (key, { includeVendor = true } = {}) => {
  if (includeVendor) {
    if (inlineStandardProperties.includes(key)) return true;

    return inlineVendorProperties.includes(key);
  }

  return inlineStandardProperties.includes(key);
}
const hasProperty = memoize(fn, { cacheKey: JSON.stringify });

export default hasProperty;
