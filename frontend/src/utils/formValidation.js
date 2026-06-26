export function isRequired(value) {
  return String(value || '').trim().length > 0
}

export function isEmail(value) {
  if (!value) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isPositiveNumber(value) {
  return Number(value) > 0
}
