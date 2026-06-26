const rates = {
  baseCharge: 1500,
  perKm: 60,
  perKg: 8,
}

export function calculateEstimate({ distance = 0, weight = 0 }) {
  const distanceCharge = Number(distance) * rates.perKm
  const weightCharge = Number(weight) * rates.perKg

  return {
    baseCharge: rates.baseCharge,
    distanceCharge,
    weightCharge,
    total: rates.baseCharge + distanceCharge + weightCharge,
  }
}
