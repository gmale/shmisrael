import React from "react"
import Page from "../Page"

const RegisterPage = (props) => {
  return (
    <Page { ...props }>
        <h2>For more information or to send your deposit, contact:</h2>
        <p>Shepherd's Heart Ministry<br/>
        PO Box 4808, Parker, CO 80134<br/>
        info@shmministry.com  303-884-8030</p>
    </Page>
  )
}

export default RegisterPage
