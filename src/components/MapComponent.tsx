import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

mapboxgl.accessToken = "pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ";

interface MapComponentProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ sidebarOpen, onToggleSidebar }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | undefined>(undefined);

  // Initialize map
  useEffect(() => {
    // Prevent re-initialization
    if (mapRef.current || !mapContainer.current) return;

    // A simple check for the access token
    if (!mapboxgl.accessToken) {
      console.error("Mapbox Access Token is not set. The map cannot be rendered.");
      alert("Mapbox Access Token is not set. Please check your .env file.");
      return;
    }

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-left');

    // The cleanup function is CRITICAL for preventing the WebGL error
    return () => {
      mapRef.current?.remove();
      mapRef.current = undefined; // Clear the ref
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Effect to resize map when sidebar toggles
  useEffect(() => {
    const resizeTimer = setTimeout(() => {
      mapRef.current?.resize();
    }, 300); 

    return () => clearTimeout(resizeTimer);
  }, [sidebarOpen]);

  return (
    <>
      <div ref={mapContainer} className="map-container-inner" />
      <button
        onClick={onToggleSidebar}
        className="toggle-button"
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {sidebarOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
    </>
  );
};

export default MapComponent;