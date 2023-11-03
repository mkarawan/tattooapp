import React from "react";
import { Link } from 'react-router-dom';


const Home: React.FC = () =>{
    return(<>

        <h1>Home</h1>
        <Link to='/designs'>
            <button>Designs</button>
        </Link>

    </>)

}

export default Home