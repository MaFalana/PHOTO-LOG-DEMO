export function MapAttribution({ baseLayer = 'streets' }) {
  const getAttribution = () => {
    switch (baseLayer) {
      case 'satellite':
        return {
          text: '© MapTiler © OpenStreetMap contributors',
          url: 'https://www.maptiler.com/copyright/'
        };
      case 'satellite-mapbox':
        return {
          text: '© Mapbox © Maxar',
          url: 'https://www.mapbox.com/'
        };
      case 'satellite-google':
        return {
          text: '© Google',
          url: 'https://www.google.com/permissions/geoguidelines/'
        };
      case 'streets':
      default:
        return {
          text: '© OpenStreetMap contributors',
          url: 'https://www.openstreetmap.org/'
        };
    }
  };

  const attribution = getAttribution();

  return (
    <div className="hwc-map-attribution">
      <a href="https://www.mfalana.dev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <b>© {new Date().getFullYear()} Malik Falana</b>
      </a>
      {' | '}
      <a
        href={attribution.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit' }}
      >
        {attribution.text}
      </a>
    </div>
  );
}
