import { useEffect } from "react";
import UnlSdk from "unl-map-js";
function App() {
  useEffect(() => {
    var map = new UnlSdk.Map({
      apiKey: "Hf4oGgFB2E23aiLLUgDqkAGrrpAA9JxL",
      vpmId: "eda1b140-0ea8-43ac-849b-eadb9d99f608",
      gridControl: true,
      indoorMapsControl: true,
      tilesSelectorControl: true,
      draftShapesControl: true,
      container: "map",
      center: [72.8777, 19.076],
      zoom: 10,
      minZoom: 2,
    });
  }, []);
  return (
    <div className="App">
      <div id="map" style={{ width: "100vh", height: "100vh" }}></div>
    </div>
  );
}

export default App;
