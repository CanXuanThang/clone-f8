import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const libraries: any = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '300px',
};
const center = {
    lat: 21.005631, // default latitude
    lng: 105.798526, // default longitude
};

function GoogleMapElm() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyD6Nit_SUVDRSh-zEPAIykgDdJfF-6CHiM',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }
    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center}>
            <Marker position={center} />
        </GoogleMap>
    );
}

export default GoogleMapElm;
