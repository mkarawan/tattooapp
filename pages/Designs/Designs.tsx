import React from "react";
import DesignCard from "../../components/DesignCard/DesignCard";
import { Link } from 'react-router-dom';


const Designs: React.FC = () =>{
    return(<>
        <Link to='/designCard'>
            <DesignCard/>
        </Link>
        <Link to='/designCard'>
            <DesignCard/>
        </Link>
        <Link to='/designCard'>
            <DesignCard/>
        </Link>
    </>)
}
export default Designs