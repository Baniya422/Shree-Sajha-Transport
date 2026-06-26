import { branches } from '../data/branches.js'

export function findNearestBranch(area) {
  const normalizedArea = String(area || '').trim().toLowerCase()

  return branches.find((branch) => branch.coverage.some((coverageArea) => (
    coverageArea.toLowerCase() === normalizedArea
  ))) || null
}
