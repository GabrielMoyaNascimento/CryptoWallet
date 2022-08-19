import React from 'react'
import Precos from '../misc/Precos'
import Header from '../misc/Header'
import MenuBar from '../navigations/MenuBar'
import Footer from '../navigations/Footer'

const Home = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <Header />
            <Precos />
            <Footer/>
        </React.Fragment>
    )
}
export default Home;