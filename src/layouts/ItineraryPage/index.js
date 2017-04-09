import React from "react"

import ItineraryMap from "../../components/ItineraryMap"
import Page from "../Page"

const ItineraryPage = (props) => {
  return (
    <Page { ...props }>
        <ItineraryMap />
    </Page>
  )
}

export default ItineraryPage
