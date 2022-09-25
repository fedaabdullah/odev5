import React from 'react'

function UrunFiyat(props){

    return(
        <li className="list-Urun_Fiyat">
            <img src={props.p.img} alt={`icon of ${props.p.İd}`}/>
            <input type="checkbox" id={props.p.id} />
            <label htmlFor={props.p.id}>{props.p.İd}</label>
        </li>
    )
}

export default UrunFiyat