import { useState } from 'react';
import { HwcMap } from '@hwc/map';

export function MapWrapper({ items, mapTilerKey }) {
  const [baseLayer, setBaseLayer] = useState('streets');
  
  return (
    <HwcMap 
      items={items} 
      mapTilerKey={mapTilerKey}
      baseLayer={baseLayer}
      onBaseLayerChange={setBaseLayer}
    />
  );
}