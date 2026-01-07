import { useState } from 'react';
import { PhotoPanel } from '@hwc/photo-panel';

export function PhotoPanelWrapper({ apiBaseUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <PhotoPanel
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      apiBaseUrl={apiBaseUrl}
      title="Photo Manager"
    />
  );
}