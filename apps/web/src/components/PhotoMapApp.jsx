import { useState } from 'react';
import { PhotoPanelWrapper } from './PhotoPanelWrapper.jsx';
import { MapWrapper } from './MapWrapper.jsx';

export function PhotoMapApp({ apiBaseUrl, mapTilerKey }) {
  // Shared state between map and photo panel
  const [selectedPhotoIds, setSelectedPhotoIds] = useState([]);
  const [highlightedPhotoId, setHighlightedPhotoId] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Handle photo uploads - refresh both panel and map
  const handlePhotosChange = () => {
    console.log('PhotoMapApp: handlePhotosChange called, incrementing refreshTrigger from', refreshTrigger);
    setRefreshTrigger(prev => {
      const newValue = prev + 1;
      console.log('PhotoMapApp: refreshTrigger updated to', newValue);
      return newValue;
    });
  };

  // Handle map marker clicks - highlight photo in panel
  const handleMarkerClick = (photo) => {
    setHighlightedPhotoId(photo._id);
    console.log('Map marker clicked:', photo.filename);
  };

  // Handle photo clicks in panel
  const handlePhotoClick = (photo) => {
    // TODO: Open photo lightbox/detail view
    console.log('Photo clicked in panel:', photo.filename);
  };

  return (
    <>
      {/* Photo Panel */}
      <PhotoPanelWrapper
        apiBaseUrl={apiBaseUrl}
        selectedPhotoIds={selectedPhotoIds}
        onSelectionChange={setSelectedPhotoIds}
        highlightedPhotoId={highlightedPhotoId}
        onPhotoClick={handlePhotoClick}
        onPhotosChange={handlePhotosChange}
        refreshTrigger={refreshTrigger}
      />
      
      {/* Map */}
      <div style={{ height: '93vh' }}>
        <MapWrapper
          mapTilerKey={mapTilerKey}
          selectedPhotoIds={selectedPhotoIds}
          onMarkerClick={handleMarkerClick}
          refreshTrigger={refreshTrigger}
          apiBaseUrl={apiBaseUrl}
        />
      </div>
    </>
  );
}