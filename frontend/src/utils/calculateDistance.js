export function calculateDistance(start, end) {
  if (!start || !end) return null

  const toRadians = (degrees) => degrees * (Math.PI / 180)
  const earthRadiusKm = 6371
  const latDistance = toRadians(end.lat - start.lat)
  const lngDistance = toRadians(end.lng - start.lng)
  const a = Math.sin(latDistance / 2) ** 2
    + Math.cos(toRadians(start.lat)) * Math.cos(toRadians(end.lat)) * Math.sin(lngDistance / 2) ** 2

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
