import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import ItineraryPage from "./layouts/ItineraryPage"
import AboutPage from "./layouts/AboutPage"
import PackagePage from "./layouts/PackagePage"
import RegisterPage from "./layouts/RegisterPage"
import Post from "./layouts/Post"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      ItineraryPage, AboutPage, PackagePage, RegisterPage,
      Post,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
