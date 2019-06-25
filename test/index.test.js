import cssNameMatch from '../src/index'

it('returns true for display', () => {
  expect(cssNameMatch('display')).toBe(true)
})

it('returns true for borderRadius', () => {
  expect(cssNameMatch('borderRadius')).toBe(true)
})

it('returns true for paddingLeft', () => {
  expect(cssNameMatch('paddingLeft')).toBe(true)
})

it('returns true for paddingLeft', () => {
  expect(cssNameMatch('paddingLeft')).toBe(true)
})

it('returns true for MozAnimation', () => {
  expect(cssNameMatch('MozAnimation')).toBe(true)
})

it('returns false for test', () => {
  expect(cssNameMatch('test')).toBe(false)
})
