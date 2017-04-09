import React from "react"

// import styles from "./index.css"
import GoogleMapReact from 'google-map-react';

// const AnyComp = () => (<div>hi</div>)

const ItineraryMap = () => (
  // <GoogleMap bootstrapURLKeys={{key: "AIzaSyAQ38AyTgvhBYPw4rf1ZPcGZxrIpZoQ0sI"}}
  //   center={[31.778031, 35.235355]} zoom={8} />

<div width="400" height="400">
    <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyAQ38AyTgvhBYPw4rf1ZPcGZxrIpZoQ0sI", language:'en'}}
          center={[31.778031, 35.235355]}
          zoom={8}
        />
</div>
)

// ItineraryMap.propTypes = {
//   text: PropTypes.string,
// }

export default ItineraryMap
