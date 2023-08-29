import {MapContainer, Marker, TileLayer, Popup, useMap, useMapEvents} from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './Map.module.css'
import {useCities} from '../context/CitiesProvider'
import { useEffect } from 'react'
import { useGeolocation } from '../hooks/useGeolocation'
import {useUrlLocation} from '../hooks/useUrlLocation'
import Button from './Button'

function Map() {
    const { cities } = useCities();
    const [mapPosition, setMapPosition] = useState([40, 0]);
    // position : geolocationPosition,
    const {isLoading : isLoadingPosition, position : geolocationPosition, getPosition} = useGeolocation();
    const [mapLat, mapLng] = useUrlLocation();

    useEffect(() => {
        if(mapLat && mapLng) setMapPosition([mapLat, mapLng])
    }, [mapLat, mapLng]);

    useEffect(() => {
        if(geolocationPosition) setMapPosition([geolocationPosition.lng, geolocationPosition.lat])
    }, [geolocationPosition])

    return (
        <div className={styles.mapContainer} >
            {!geolocationPosition && <Button type="position" onClick={getPosition}>
                {isLoadingPosition ? 'Loading...' : 'Use your position'}
            </Button>}
            <MapContainer className={styles.map} center={mapPosition} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) => <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
                    <Popup>
                        <span>{city.emoji}</span>
                        <span>{city.cityName}</span>
                    </Popup>
                </Marker>) }
                <ChangeCenter position={mapPosition}/>
                <DetectClick />
            </MapContainer>
        </div>
    )
}

function ChangeCenter({position}) {
    const map = useMap();
    map.setView(position);
    return null;
}

function DetectClick() {
    const navigate = useNavigate();
    useMapEvents({
        click : (e) => 
        {
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
        }
    });
}

export default Map