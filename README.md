# Inline Style Properties

## Usage

Check if inline styles has property

```js
import { hasProperty } from '@amendable/inline-style-properties'

hasProperty('MozAnimation') // true
hasProperty('display') // true
hasProperty('test') // false
```

You can exclude vendor properties by passing `includeVendor` option;

```js
hasProperty('MozAnimation', { includeVendor: false }) // false
```

Get all properties list

```js
import properties from '@amendable/inline-style-properties'

console.log(properties) // ['display', 'MozAnimation', ...]
```
