import React from "react";
import Layout from "../../Layouts/Layout";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";


function Apropos () {
    return(
        <>
            <div style={{height: '952px'}}>
                <Layout>
                   <Banner />
                    <Collapse title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                                                        Les photos sont conformes aux logements, et toutes les informations
                                                        sont régulièrement vérifiées par nos équipes."/>
                    <Collapse title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa.
                                                    Tout comportement discriminatoire ou de pertubation du voisinage
                                                    entraînera une exclusion de notre plateforme."/>
                    <Collapse title="Service" text="La bienveillance fait partie des valeurs fondatrices de Kasa.
                                                    Tout comportement discriminatoire ou de pertubation du voisinage
                                                    entraînera une exclusion de notre plateforme."/>
                    <Collapse title="Sécurité" text="La sécurtié est la priorité de Kasa. Aussi bien pour nos hôtes que
                                                        pour nos voyageurs, chaque logement correspond aux critères de 
                                                        sécurité établis par nos services. En laissant une note aussi 
                                                        bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
                                                        que les standards sont bien respectés. Nous organisons également
                                                        des ateliers sur la sécurité domestique pour nos hôtes." />
                </Layout>
            </div>
        </>
    )
   
}

export default Apropos