import memoize from 'mem';
import inlineProperties from './inlineProperties.json';

const fn = (key) => inlineProperties.includes(key);
const hasProperty = memoize(fn);

export { hasProperty };

export default inlineProperties;
