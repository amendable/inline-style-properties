import { hasProperty } from '../src/index'

it('returns true for display', () => {
  expect(hasProperty('display')).toBe(true)
})

it('returns true for borderRadius', () => {
  expect(hasProperty('borderRadius')).toBe(true)
})

it('returns true for paddingLeft', () => {
  expect(hasProperty('paddingLeft')).toBe(true)
})

it('returns true for paddingLeft when includeVendor is false', () => {
  expect(hasProperty('paddingLeft', { includeVendor: false })).toBe(true)
})

it('returns true for MozAnimation', () => {
  expect(hasProperty('MozAnimation')).toBe(true)
})

it('returns false for MozAnimation when includeVendor is false', () => {
  expect(hasProperty('MozAnimation', { includeVendor: false })).toBe(false)
})

it('returns false for test', () => {
  expect(hasProperty('test')).toBe(false)
})
