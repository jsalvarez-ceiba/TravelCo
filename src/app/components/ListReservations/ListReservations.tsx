import React from 'react'

const ListReservations = () => {
    return (
        <div>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <table className="opacity table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ciudad</th>
                            <th>Pais</th>
                            <th>Código</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {places.map((element:placesModel, index) => (
                            <tr key={index.toString()}>
                                <td> {index + 1} </td>
                                <td> {element.city} </td>
                                <td> {element.country} </td>
                                <td> {element.flag} </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>

            
        </div>
    )
}

export default ListReservations
