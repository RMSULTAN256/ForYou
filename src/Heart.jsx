import React, { useState } from 'react';

function ForYou() {

    const [posisi, setPosisi] = useState({ top: '50%', left: '50%'});

    const handleButton = () => {
        const newTop = Math.random() * 90 + '%';
        const newLeft = Math.random() * 90 + '%';

        setPosisi({ top: newTop, left: newLeft });
    };
    return (
        <div className="container-button" style={
            {   
                position: 'relative',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                padding: '5px',
                border: '2px solid #ff69b4',
                borderSizing: 'border-box',
            }
        }>
            <button className="Button1" onClick={handleButton} style={
                {
                    top: posisi.top,
                    left: posisi.left,
                    transition: 'top 0.2s ease-out, left 0.2s ease-out',
                }
            }>For You</button>
        </div>
    );
}

export default ForYou;