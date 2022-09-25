import React from 'react'

function Header(){
    const client = "Designer";
    const title = {
        Ozellik: "Ozellik",
        Fiyaat: "UcuzFiyat"
    }

    const info = {
        name: "",
        nickname: ""
    }

    return(
        <div className="navbar bg-dark rounded text-white">
            Hello {`${info.name} ${info.nickname}`}
            <h2>
                {client === "Fiyat" ? title.Ucuz FİYAT : title.Ozellik} 
            </h2>
        </div>
    );
}

export default Header;
