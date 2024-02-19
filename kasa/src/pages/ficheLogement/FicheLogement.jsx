import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Layout from "../../Layouts/Layout";
import Datas from "../../assets/logements/logements.json";
import Logements from "../../components/Logements/Logements";
import Card from "../../components/Card/Card";
import Carrousel from "../../components/Carrousel/Carrousel";

function FicheLogement (){
    return (
        <Layout>
            <Card />
        </Layout>
    )

}

export default FicheLogement