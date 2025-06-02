import React, { useEffect, useState, useRef} from "react";

function Lembar1() {

    const [Text, setText] = useState("Jadi, Kamu mau melanjutkan percakapan ini?");
    const [denyCount, setDenyCount] = useState(0);
    const [accCount, setAccCount] = useState(0);
    const [isAccepted, setIsAccepted] = useState(false);
    const [isFinal, setIsFinal] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [ImgAccepted, setImgAccepted] = useState("");
    
    const audioRef = useRef(null);

    useEffect(() => {
        if (isFinal && audioRef.current) {
            audioRef.current.play();
        }
    }, [isFinal]);

    useEffect(() => {
        let index = 0;
        setDisplayedText("");
        const interval = setInterval(() => {
            index++;

            setDisplayedText(Text.slice(0, index));
            if (index === Text.length) clearInterval(interval);
            }, 50);

            return () => clearInterval(interval);
        }, [Text]);
    const TampilamAwal = "https://i.pinimg.com/736x/f1/7c/9c/f17c9c4e69a99ccd4affb59b00053c42.jpg"
    const handleLanjut = () => {
        setText("Ya... aku juga suka pada mu, jadi hmmmm~ Jadian yuk?");
        setImgAccepted("https://i.pinimg.com/736x/73/d9/79/73d9795fdc83b747a95c158f52d4d510.jpg");
        setIsAccepted(true);
        setDenyCount(0);
        setAccCount(accCount + 1);
        if (accCount >= 1) {
            setText("Dengan ini kita resmi jadian ya, sayangku~💘. Anjay😏");
            setIsFinal(true);
            setImgAccepted("https://i.pinimg.com/736x/df/9f/90/df9f905f30a3dca60d24acdedef3ef2c.jpg");

            if (audioRef.current) {
                audioRef.current.play().catch(err => {
                    console.error("Audio playback failed:", err);
                });
            }
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

            const ImageResponse = [
                "https://i.pinimg.com/736x/5f/6a/b2/5f6ab253f5d799e4647d17801ef72083.jpg",
                "https://i.pinimg.com/736x/11/0b/7a/110b7abdeb4564b7fc621f4eb6366cdb.jpg",
                "https://i.pinimg.com/736x/71/4d/64/714d64dd7a8080bd22d14499f7d5c252.jpg",
                "https://i.pinimg.com/736x/1d/1d/9b/1d1d9be296f0b1ed2d2963fe4e5cd219.jpg",
                "https://i.pinimg.com/736x/30/7e/6b/307e6bd41dea3d337515e376d74cafa8.jpg"

            ]
            setText(responseDeny[Math.min(denyCount, responseDeny.length - 1)]);
            setImageUrl(ImageResponse[Math.min(denyCount, ImageResponse.length - 1)]);
            setDenyCount(denyCount + 1);
        } else {
            const responsesAfter = [
            "Ooops, tidak segampang itu bilang tidak, hehe",
            "Hmmm, tidak bisa tidak dong, hehe",
            "Tekan Boleh gak?",
            "Bilang iya babe~☺️",
            "Mau apa hayo? tekan IYA"
            ]

            const ImageResponsesAfter = [
                "https://i.pinimg.com/736x/41/9a/a5/419aa57e7d8dbd3160f62fcd51f08834.jpg",
                "https://i.pinimg.com/736x/cb/1d/30/cb1d306031df44638936fefad6dab1a0.jpg",
                "https://i.pinimg.com/736x/09/ee/59/09ee59aefb5c13a35ab19369e3dab3c3.jpg",
                "https://i.pinimg.com/736x/33/bc/27/33bc2751a97b222d98a2882d205ee39d.jpg",
                "https://i.pinimg.com/736x/7d/cc/38/7dcc38de5d9914cb76bd532dd77e7f58.jpg"
            ]
            setText(responsesAfter[Math.min(denyCount, responsesAfter.length - 1)]);
            setImageUrl(ImageResponsesAfter[Math.min(denyCount, ImageResponsesAfter.length - 1)]);
            setDenyCount(denyCount + 1);
        }
    }

    const resbtn = [
        "Iya gak?",
        "Tombolnya ku matiin, hehe~",
    ]
    return (
        <>
        <header className="Lembar1-Header">
            { !isAccepted ? (
            <img 
                src={ denyCount >= 1 ? imageUrl : TampilamAwal} style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                maxWidth: "20%",
                maxHeight: "50%",
            }}></img>
            ) : (<img src={denyCount >= 1 ? imageUrl : ImgAccepted} 
            style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                maxWidth: "20%",
                maxHeight: "50%",
                borderRadius: "10px",
            }}>
            </img>)}
        </header>
        <body className="Lembar1-Body"></body>
        <div className="Container-Div">
            <div className="Text">
                <p>{displayedText}</p>
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
        <audio ref={audioRef} src={`${import.meta.env.BASE_URL}audio/marry.mp3`} preload="auto" loop />
        
        </>
        
    )
}

export default Lembar1;