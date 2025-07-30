import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import api from '../services/api';

const containerStyle = { width: '100%', height: '400px' };

export default function TrackParcel({ parcelId }) {
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' });
  const [coords, setCoords] = useState({ lat: 23.8103, lng: 90.4125 }); // default Dhaka

  useEffect(() => {
    const fetchCoords = async () => {
      const res = await api.get(`/parcels/${parcelId}`);
      if (res.data.parcel.coordinates) {
        setCoords(res.data.parcel.coordinates);
      }
    };
    fetchCoords();
  }, [parcelId]);

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={coords} zoom={14}>
        <Marker position={coords} />
      </GoogleMap>
    )
  );
}
