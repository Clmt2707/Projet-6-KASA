import React from "react";
import Layout from "../../Layouts/Layout";
import Banner from "../../components/Banner/Banner";
import Logements from "../../components/Logements/Logements";

function Accueil() {
    return(
        <>
            <Layout>
                <Banner page="/" content="Chez vous, partout et ailleurs" />
                <Logements />
            </Layout>
        </>
    )
}


export default Accueil