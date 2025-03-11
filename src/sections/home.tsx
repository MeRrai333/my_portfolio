import { useState, useEffect } from "react";
import LanguageTH from "../lg/th.json"
import LanguageEN from "../lg/en.json"

export default function Home(){
    const [imageBackHeigh, setImageBackHeigh] = useState("0px");
    const [contentText, setContentText] = useState(LanguageEN)

    useEffect(() => {
        setImageBackHeigh(`${document.getElementsByClassName("homeBackgroundImage")[0].clientHeight/2}px`)
    }, [document.getElementsByClassName("homeBackgroundImage")])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if(params.get("lg") == "TH")
            setContentText(LanguageTH)
        else if(params.get("lg") == "EN" || !params.get("lg"))
            setContentText(LanguageEN)
    }, [])

    return <section id="Home">
        <div className="homeBackgroundImage"></div>
        <div className="content"
            style={{top: imageBackHeigh}}
        >
            <div id="homeCard">
                <h1>
                    {contentText.Home.iam.header}
                </h1>
                <p>
                    {contentText.Home.iam.position}
                </p>
            </div>
        </div>
    </section>
}