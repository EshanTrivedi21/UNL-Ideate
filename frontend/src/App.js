import { useEffect } from "react";
// import UnlSdk from "unl-map-js";
// import Geohash from "latlon-geohash";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  useEffect(() => {
    // var map = new UnlSdk.Map({
    //   apiKey: "Hf4oGgFB2E23aiLLUgDqkAGrrpAA9JxL",
    //   vpmId: "eda1b140-0ea8-43ac-849b-eadb9d99f608",
    //   container: "map",
    //   center: [0, 0],
    //   zoom: 1,
    //   minZoom: 2,
    // });
    // navigator.geolocation.getCurrentPosition((position) => {
    //   // map.setView([position.coords.latitude, position.coords.longitude], 18);
    //   map.jumpTo({
    //     center: [position.coords.longitude, position.coords.latitude],
    //     zoom: 18,
    //     pitch: 45,
    //     // bearing: 90
    //   });
    //   var marker = new UnlSdk.Marker()
    //     .setLngLat([position.coords.longitude, position.coords.latitude])
    //     .addTo(map);
    //   const geohash = Geohash.encode(
    //     position.coords.latitude,
    //     position.coords.longitude,
    //     6
    //   );
    //   console.log(position.coords.latitude, position.coords.longitude, geohash);
    // });
    // s.forEach((e,i)=>{
    //   s[i] = e.split(',')
    // })
    // map.on("load", function () {
    //   map.addSource("route", {
    //     type: "geojson",
    //     data: {
    //       type: "Feature",
    //       properties: {},
    //       geometry: {
    //         type: "LineString",
    //         coordinates: s,
    //       },
    //     },
    //   });
    //   map.addLayer({
    //     id: "route",
    //     type: "line",
    //     source: "route",
    //     layout: {
    //       "line-join": "round",
    //       "line-cap": "round",
    //     },
    //     paint: {
    //       "line-color": "#4287f5",
    //       "line-width": 8,
    //     },
    //   });
    // });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);
  return (
    <>
      {/* <div id="map" style={{ width: "100vw", height: "100vh" }}></div> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
