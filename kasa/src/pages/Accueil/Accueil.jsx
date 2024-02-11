import React from "react";
import Layout from "../../Layouts/Layout";
import Banner from "../../components/Banner/Banner";

function Accueil() {
    return(
        <>
            <Layout>
                <Banner page="/" content="Chez vous, partout et ailleurs" />
            </Layout>
        </>
    )
}


export default Accueil