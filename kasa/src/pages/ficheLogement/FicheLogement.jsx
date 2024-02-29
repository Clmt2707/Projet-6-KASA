import React from "react";
import Layout from "../../Layouts/Layout";
import Card from "../../components/Card/Card";
import Error from "../Erreur 404/Erreur404";
import { useParams } from "react-router-dom";
import Data from "../../assets/logements/logements.json";

function FicheLogement (){
    const { id } = useParams();
    const logement = Data.find((logement) => logement.id === id );

    if(!logement) {
        return <Error />
    }
    return (
        <Layout>
            <Card />
        </Layout>
    )

}

export default FicheLogement