import inlineProperties from './inlineProperties.json'
const hasProperty = (key) => inlineProperties.includes(key);

export {
  hasProperty,
}

export default inlineProperties;
