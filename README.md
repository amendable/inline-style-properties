# Inline Style Properties

## Usage

Check if inline styles has property

```js
import { hasProperty } from '@amendable/inline-style-properties'

hasProperty('MozAnimation') // true
hasProperty('display') // true
hasProperty('test') // false
```

Get all properties list

```js
import properties from '@amendable/inline-style-properties'

console.log(properties) // ['display', 'MozAnimation', ...]
```
