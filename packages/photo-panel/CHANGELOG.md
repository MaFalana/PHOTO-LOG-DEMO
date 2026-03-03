# @hwc/photo-panel Changelog

## [0.1.0] - 2026-03-03

### Added
- Added `visiblePhotoIds` prop to filter displayed photos based on map viewport
- Photos now automatically filter to show only those visible on the map
- Added "X of Y in view" indicator when viewport filtering is active
- Added helpful empty state message when no photos are visible in current map view

### Changed
- PhotoGrid now supports client-side filtering based on visible photo IDs
- "Select All" button now only selects photos visible in current view
- Lightbox navigation now works correctly with filtered photo sets
- Improved photo count display to show filtering status

### Fixed
- Photo navigation in lightbox now respects filtered photo list

## [0.0.1] - Initial Release

### Added
- Initial photo grid component with thumbnail display
- Photo selection and batch operations
- Photo lightbox with navigation
- Upload functionality
- Export to ZIP, KML, and KMZ formats
- Tag editing and filtering
- Pagination support
