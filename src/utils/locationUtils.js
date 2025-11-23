/**
 * Utility functions for location and region detection
 */

export async function getIPLocation() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('Failed to get IP location');
    const data = await response.json();
    return {
      city: data.city,
      region: data.region,
      country: data.country_name,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  } catch (error) {
    console.error('Error fetching IP location:', error);
    return null;
  }
}

export function getPreferredLocation(userLocation, ipLocation) {
  // Prioritize user-provided location if available
  if (userLocation && userLocation.trim() !== '') {
    return userLocation;
  }
  if (ipLocation) {
    return `${ipLocation.city}, ${ipLocation.region}, ${ipLocation.country}`;
  }
  return null;
}
