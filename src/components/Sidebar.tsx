import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarClassName = `sidebar ${isOpen ? '' : 'closed'}`;

  return (
    <aside className={sidebarClassName}>
      <div className="sidebar-header">
        <h2>Sidebar</h2>
        <button
          onClick={onClose}
          className="close-button"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>
      </div>
      <div className="sidebar-content">
        <p>Your sidebar content here.</p>
      </div>
    </aside>
  );
};

export default Sidebar;