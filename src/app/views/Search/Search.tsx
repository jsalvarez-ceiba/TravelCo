import React from 'react'
/* import './Search.style.scss'; */
import ListReservations from '../../components/ListReservations/ListReservations'

const Search = () => {
    return (
        <div className="backgroundFly"  style={{width: '100vw', height: '100vh'}}>

            <div style={{width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh'}}>
                <div>
                    <h4>Buscar vuelo</h4>
                    <input style={{width: 200}} type="text" name="" id="" className="form-control" />
                </div>
            </div>

            <div style={{width: '100vw', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                <ListReservations />
            </div>




        </div>
    )
}

export default Search
