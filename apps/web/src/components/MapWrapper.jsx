import { useState, useEffect } from 'react';
import { HwcMap } from '@hwc/map';

export function MapWrapper({ 
  mapTilerKey, 
  selectedPhotoIds = [], 
  onMarkerClick,
  refreshTrigger = 0,
  apiBaseUrl 
}) {
  const [baseLayer, setBaseLayer] = useState('streets');
  const [photoMarkers, setPhotoMarkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch photo markers from API
  const fetchPhotoMarkers = async () => {
    try {
      setLoading(true);
      console.log('MapWrapper: Fetching photo markers from', `${apiBaseUrl}/photos/markers`);
      const response = await fetch(`${apiBaseUrl}/photos/markers`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch photo markers: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('MapWrapper: Received markers data:', data);
      
      // Transform API response to map format
      const markers = data.markers.map(photo => ({
        id: photo._id,
        lat: photo.location?.lat,
        lon: photo.location?.lon,
        name: photo.filename,
        photo: photo // Keep full photo data for reference
      })).filter(marker => 
        // Only include photos with valid GPS coordinates
        marker.lat != null && marker.lon != null &&
        Number.isFinite(marker.lat) && Number.isFinite(marker.lon)
      );

      console.log('MapWrapper: Transformed markers:', markers);
      setPhotoMarkers(markers);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching photo markers:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch markers on mount and when refresh trigger changes
  useEffect(() => {
    console.log('MapWrapper: refreshTrigger changed to:', refreshTrigger, 'apiBaseUrl:', apiBaseUrl);
    if (apiBaseUrl) {
      fetchPhotoMarkers();
    }
  }, [apiBaseUrl, refreshTrigger]);

  // Handle marker clicks
  const handleMarkerClick = (markerId, marker) => {
    if (onMarkerClick && marker.photo) {
      onMarkerClick(marker.photo);
    }
  };

  // If no API URL provided, show dummy markers for development
  const items = apiBaseUrl ? photoMarkers : [
    { id: "a", lat: 38.0, lon: -87.5, name: "A" },
    { id: "b", lat: 38.02, lon: -87.52, name: "B" }
  ];

  return (
    <HwcMap 
      items={items}
      mapTilerKey={mapTilerKey}
      baseLayer={baseLayer}
      onBaseLayerChange={setBaseLayer}
      selectedIds={selectedPhotoIds}
      onSelect={handleMarkerClick}
      showControls={true}
      cluster={true}
    />
  );
}