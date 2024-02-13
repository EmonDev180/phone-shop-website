import { useLoaderData } from "react-router-dom";
import Banner from "../../Componets/Banner/Banner";
import Phones from "../../Componets/Phones/Phones";




const Home = () => {

    const phones = useLoaderData();



 
    return (
        <div>
           
            <Banner></Banner>
            <Phones phones={phones}></Phones>
           
          
        </div>
    );
};

export default Home;