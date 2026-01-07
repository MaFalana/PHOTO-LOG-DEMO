import './panel.css';
import { FaChevronLeft, FaXmark } from 'react-icons/fa6';

export function HwcPanel({ 
  isOpen, 
  onToggle, 
  title = "Panel",
  toggleLabel = "Open Panel",
  children 
}) {
  if (!isOpen) {
    return (
      <button 
        className="hwc-panel-toggle collapsed"
        onClick={onToggle}
        aria-label={toggleLabel}
        title={toggleLabel}
      >
        <FaChevronLeft />
      </button>
    );
  }

  return (
    <div className="hwc-panel">
      <div className="hwc-panel-header">
        <h3>{title}</h3>
        <button 
          className="hwc-panel-close"
          onClick={onToggle}
          aria-label="Close panel"
        >
          <FaXmark />
        </button>
      </div>

      <div className="hwc-panel-content">
        {children}
      </div>
    </div>
  );
}