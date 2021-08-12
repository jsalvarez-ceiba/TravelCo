import React, {useEffect} from 'react';
import { axiosIntance } from '../../../../core/config/AxiosConfig';

/* import medellin from '../../../../../assets/img/imgsPlaces/medellin.jpg';
import bogota from '../../../../../assets/img/imgsPlaces/bogota.jpg';
import cali from '../../../../../assets/img/imgsPlaces/cali.jpg';
import cartagena from '../../../../../assets/img/imgsPlaces/Cartagena.jpg';
import bucaramanga from '../../../../../assets/img/imgsPlaces/Bucaramanga.png';
import miami from '../../../../../assets/img/imgsPlaces/miami.jpg'
import chicago from '../../../../../assets/img/imgsPlaces/chicago.jpg'
import boston from '../../../../../assets/img/imgsPlaces/boston.jpg'
import la from '../../../../../assets/img/imgsPlaces/losangeles.jpg'
import washington from '../../../../../assets/img/washington.jpg'
import madrid from '../../../../../assets/img/madrid.jpg'
import barcelona from '../../../../../assets/img/barcelona.jpg'
import ibiza from '../../../../../assets/img/ibiza.jpg'
import galicia from '../../../../../assets/img/galicia.jpg'
import marbella from '../../../../../assets/img/marbella.jpg' */


const ContainerPlaces = () => {

    interface placesModel {
        city:string,
        country:string,
        flag: string
    }

    /* const [places, setplaces] = useState([]); */

    useEffect(() => {

        axiosIntance.get('http://localhost:8000/places').then((res) => {
            console.log('res places => ', res.data);
            /* setplaces(res.data); */
        });

        
    }, []);


    return (
        <div className="flexCenter">
            {/* {
                places.map((element:placesModel, index) => (

                    <div className="card">
                        <img style={{width: 320, height: 250}} src={
                            element.city === 'Medellín' ? medellin :
                            element.city === 'Bogotá' ? bogota :
                            element.city === 'Cali' ? cali :
                            element.city === 'Bucaramanga' ? bucaramanga :
                            element.city === 'Cartagena' ? cartagena :
                            element.city === 'Miami' ? miami :
                            element.city === 'Chicago' ? chicago :
                            element.city === 'Los Angeles' ? la :
                            element.city === 'Boston' ? boston :
                            element.city === 'Washington' ? washington :
                            element.city === 'Barcelona' ? barcelona :
                            element.city === 'Madrid' ? madrid :
                            element.city === 'Marbella' ? marbella :
                            element.city === 'Galicia' ? galicia :
                            element.city === 'Ibiza' ? ibiza : ''
                        } className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center"> {element.city} </h5>
                        </div>
                    </div>



            
                ))
            } */}
            
        </div>
    );
};

export default ContainerPlaces;