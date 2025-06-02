import React, { useEffect, useState} from "react";

function Lembar1() {

    const [Text, setText] = useState("Jadi, Kamu mau melanjutkan percakapan ini?");
    const [denyCount, setDenyCount] = useState(0);
    const [accCount, setAccCount] = useState(0);
    const [isAccepted, setIsAccepted] = useState(false);
    const [isFinal, setIsFinal] = useState(false);

    const handleLanjut = () => {
        setText("Ya... aku juga suka pada mu, jadi hmmmm~ Jadian yuk?");
        setIsAccepted(true);
        setDenyCount(0);
        setAccCount(accCount + 1);
        if (accCount >= 1) {
            setText("Dengan ini kita resmi jadian ya, sayangku~💘. Anjay😏");
            setIsFinal(true);
        }
    };

    const handleGak = () => {
        if (!isAccepted) {
            const responseDeny = [
            "Please dong, aku mau ngomong sesuatu",
            "Please Dong~~~",
            "PLEASEEEEEEE!!!!",
            "Aku serius nih, please dong🥲",
            "Aku cuma mau ngomong sesuatu yang penting"
        ];
        setText(responseDeny[Math.min(denyCount, responseDeny.length - 1)]);
        setDenyCount(denyCount + 1);
        } else {
            const responsesAfter = [
            "Ooops, tidak segampang itu bilang tidak, hehe",
            "Hmmm, tidak bisa tidak dong, hehe",
            "Eh, tidak bisa tidak dong, hehe",
            "Bilang iya babe~💘",
            "Mau apa hayo? tekan IYA"
            ]
            setText(responsesAfter[Math.min(denyCount, responsesAfter.length - 1)]);
            setDenyCount(denyCount + 1);
        }
    }

    const resbtn = [
        "Iya gak?",
        "Tombolnya ku matiin, hehe~",
    ]
    return (
        <>
        <div className="Container-Div">
            <div className="Text">
                <p>{Text}</p>
            </div>
            <div className="Lembar1">
                <button className="By" onClick={handleLanjut} style={{
                    width: isFinal ? "75%" : "",
                    height: isFinal ? "40%" : "",
                    top: isFinal ? "50%" : "",
                    left: isFinal ? "50%" : "",
                    fontSize: isFinal ? "1.5rem" : "",
                }}>{isFinal ? "Makasih ya Sayang💓💓😘" : "Boleh"}</button>
                
                {!isFinal && (
                    <button 
                        className={`Bn ${isAccepted ? "disabled" : ""}`} 
                        onClick={handleGak}
                        disabled={denyCount > 5}
                        style={{
                            opacity: denyCount > 5 ? 0.8 : 1,
                            pointerEvents: denyCount > 5 ? "none" : "auto",
                            cursor: denyCount > 5 ? "not-allowed" : "pointer",
                            height: denyCount >= 5 ? "auto" : "",
                        }}
                    >
                        {denyCount >= 5 && isAccepted ? "Hayoloh Tombolnya kumatiin lagi,, hehe~" : denyCount >= 5 ? `${resbtn[denyCount - 5]}`|| resbtn[resbtn.length - 1] : "Gak mau"}
                    </button>
                )}
            </div>
        </div>
        
        </>
        
    )
}

export default Lembar1;