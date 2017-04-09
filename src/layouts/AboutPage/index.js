import React from "react"
import Page from "../Page"
import {Flex, Box} from 'reflexbox';

const AboutPage = (props) => {
  return (
    <Page { ...props }>
        <Flex column align="center">
          <Box><img src="https://static.wixstatic.com/media/1b37e0_5f42b56b8646478ea69091c89104100c~mv2.jpg/v1/fill/w_243,h_243,al_c,q_80,usm_0.66_1.00_0.01/1b37e0_5f42b56b8646478ea69091c89104100c~mv2.webp"/></Box>
          <Box><small>Larry and Lorrie Russell</small></Box>
          <Box col={8} pt={3}>The Russells and Andersons will be conducting an 8-week class, prior to our departure. You will see pictures of the sites and hotels, receive packing tips, begin to develop relationships with those going on our trip, and more! All participants will be notified of time, dates and location at the beginning of 2018.</Box>
        </Flex>
    </Page>
  )
}

export default AboutPage
