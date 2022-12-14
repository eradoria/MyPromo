import React, { useCallback, useState, useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const apiKey = process.env.REACT_MAPS_API_KEY;
const apiKey = "AIzaSyDgF8uBNCWRm42BNoBUQkrj0XyIymW9jG4";

const containerStyle = {
  width: "95%",
  height: "400px",
  marginBottom: "3rem",
};

const Map = (props) => {
  console.log("Map props are:", props);
  // const mapRef = useRef();
  const center = useMemo(() => ({ lat: 33.574, lng: -101.859 }), []);
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      // mapId: '83c2d4e1e9177d04',
    }),
    []
  );
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  // eslint-disable-next-line
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const onLoad = useCallback(
    (map) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder
        .geocode({ address: props.address })
        .then((res) => {
          // full response results
          console.log("fetch results are:", res.results);

          // formatted address from results
          console.log(
            "fetch formatted address:",
            res.results[0].formatted_address
          );

          // geometry (lat & lng)
          setLat(res.results[0].geometry.location.lat());
          setLng(res.results[0].geometry.location.lng());
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [props.address]
  );

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={options}
      zoom={11}
      // mapStyle={mapStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={{ lat: lat, lng: lng }}
        name="Testing"
        color="secondary"
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
