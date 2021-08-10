import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import './Home.style.scss';
import TitleHome from '../../components/TitleHome/TitleHome';


const Home = () => {

    

    useEffect(() => {

        


    }, []);

    return (
        <div className="background">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="flexTop font">
                            <TitleHome />
                        </div>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;
