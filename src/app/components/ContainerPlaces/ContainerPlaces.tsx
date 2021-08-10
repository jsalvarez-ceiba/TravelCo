import React, {useEffect, useState} from 'react';
import { axiosIntance } from '../../core/config/AxiosConfig';


const ContainerPlaces = () => {

    interface placesModel {
        city:string,
        country:string,
        flag: string
    }

    const [places, setplaces] = useState([]);

    useEffect(() => {

        axiosIntance.get('http://localhost:8000/places').then((res) => {
            console.log('res places => ', res.data);
            setplaces(res.data);
        });

        
    }, []);


    return (
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <table className="table table-light box">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ciudad</th>
                        <th>Pais</th>
                        <th>Código</th>
                    </tr>
                </thead>
                <tbody>
                    {places.map((element:placesModel, index) => (
                        <tr key={index.toString()}>
                            <td> {index + 1} </td>
                            <td> {element.city} </td>
                            <td> {element.country} </td>
                            <td> {element.flag} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContainerPlaces;
