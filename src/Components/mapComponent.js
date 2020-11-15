import ReactMapGL, {Marker} from 'react-map-gl';

const mapComponent = () => {
    const mapStyle = {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    };

    return(
        <ReactMapGL 
                mapboxApiAccessToken="pk.eyJ1IjoicGpseDkxMSIsImEiOiJja2hpcHRrY3UwY2hiMnhzODVmMnV3aTNuIn0.k11BAYCM9-Xv0DQUR6gdlw"
                {...mapStyle}
            >
            <Marker latitude={37.7577} longitude={-122.4376} offsetLeft={-20} offsetTop={-10}>
            </Marker>
        </ReactMapGL>
    );
};

export default mapComponent;