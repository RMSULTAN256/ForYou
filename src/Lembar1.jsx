import React from "react";

function Lembar1() {
    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body className='Lembaran' style={
            {
                backgroundImage: "url('https://images.unsplash.com/photo-1585146005358-05e9559ad597?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }
        }>
        </body>
        <div className="Text">
            <p className="Isi">Apakah kamu ingin melanjutkan?</p>
        </div>
        <div className="Lembar1">
            <button className="By">Lanjut</button>
            <button className="Bn">Gak</button>
        </div>
        </>
        
    )
}

export default Lembar1;