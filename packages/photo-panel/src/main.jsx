import './photo-panel.css';
import { useState } from 'react';
import { HwcPanel, PanelSection } from '@hwc/panel';
import { FiUpload, FiFilter, FiImage, FiEdit } from 'react-icons/fi';
import { UploadSection } from './upload-section.jsx';

export function PhotoPanel({ 
  isOpen, 
  onToggle, 
  apiBaseUrl,
  title = "Photo Manager",
  onPhotosChange
}) {
  const [expandedSections, setExpandedSections] = useState({
    upload: true,
    filters: false,
    photos: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleUploadComplete = (count) => {
    console.log(`${count} photos uploaded successfully`);
    // Refresh photos list
    if (onPhotosChange) {
      onPhotosChange();
    }
  };

  return (
    <HwcPanel
      isOpen={isOpen}
      onToggle={onToggle}
      title={title}
      toggleLabel="Open Photo Manager"
    >
      {/* Upload Section */}
      <PanelSection
        title="Upload Photos"
        icon={<FiUpload />}
        isExpanded={expandedSections.upload}
        onToggle={() => toggleSection('upload')}
      >
        <UploadSection 
          apiBaseUrl={apiBaseUrl}
          onUploadComplete={handleUploadComplete}
        />
      </PanelSection>

      {/* Filters Section */}
      <PanelSection
        title="Filters"
        icon={<FiFilter />}
        isExpanded={expandedSections.filters}
        onToggle={() => toggleSection('filters')}
      >
        <div className="filter-placeholder">
          <p className="empty-message">Filters coming soon...</p>
        </div>
      </PanelSection>

      {/* Photos Section (includes batch actions) */}
      <PanelSection
        title="Photos & Actions"
        icon={<FiImage />}
        isExpanded={expandedSections.photos}
        onToggle={() => toggleSection('photos')}
      >
        <div className="photos-placeholder">
          <p className="empty-message">Photo grid with batch actions coming soon...</p>
        </div>
      </PanelSection>
    </HwcPanel>
  );
}