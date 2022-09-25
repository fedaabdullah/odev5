import React from 'react'
import Urun_Fiyat from '...//https://www.morhipo.com/kirtasiye'



function UrunFiyat(props){
    function (){
    return(
            <ul className="list-urun-fiyat">

                <Fiyat
                    p = {{
                        browser:'morhipo',
                        id:'morhipo',
                        href:'https://www.morhipo.com/kirtasiye',
                    }}
                />

                <Fiyat
                    p = {{
                        browser:'carrefoursa',
                        id:'carrefoursa',
                        href:'https://www.carrefoursa.com/kirtasiye/c/2149',
                    }}
                />

                <Fiyat
                    p = {{
                        browser:'panelkirtasiye',
                        id:'panelkirtaiye',
                        href:'https://www.panelkirtasiye.com/kirtasiye',
                    }}
                />

                <Fiyat
                    p = {{
                        browser :'akakirtasiye',
                        id:'akakirtasiye',
                        href:'https://www.akakirtasiye.com.tr/kirtasiye/',
                    }}
                />
            </ul>
    );
    }   
}

export default Fiyat;

