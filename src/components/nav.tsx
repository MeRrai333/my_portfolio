import { useState } from "react";

const navContent = [
    {
        text: "Home",
        scrollId: "Home"
    },
    {
        text: "About me",
        scrollId: "aboutMe"
    },
    {
        text: "Tech stacks",
        scrollId: "techStacks"
    },
    {
        text: "Projects",
        scrollId: "projects"
    }
]

const lg = [
    "TH", "EN"
]

export default function NavBar(){
    const [isHidden, setIsHidden] = useState(true)

    return <>
        <nav id="desktop">
            <ul>
                {navContent.map((n, i) =>
                    <li
                        key={i}
                        onClick={() => {
                            document.getElementById(n.scrollId)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                        }}
                    >
                        {n.text}
                    </li>
                )}
                <li>
                    {
                        lg.map((l, i) => 
                            <p
                                key={i}
                                onClick={() => {
                                    var urlParams = new URLSearchParams(window.location.search)
                                    urlParams.set("lg", l)
                                    window.location.search = urlParams.toString();
                                }}
                            >
                                {l}
                            </p>
                        )
                    }
                </li>
            </ul>
        </nav>
        <div id="nonDesktop"
            onClick={() => setIsHidden(false)}
        >
            &gt;
        </div>
        <nav id="nonDesktop"
            style={{
                transform: isHidden ? "translateX(-100%)" : "translateX(0)"
            }}
        >
            <ul>
                <li
                    onClick={() => setIsHidden(true)}
                >
                    Close
                </li>
                {navContent.map((n, i) =>
                    <li
                        key={i}
                        onClick={() => {
                            document.getElementById(n.scrollId)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                        }}
                    >
                        {n.text}
                    </li>
                )}
                <li>
                    {
                        lg.map((l, i) => 
                            <p
                                key={i}
                                onClick={() => {
                                    var urlParams = new URLSearchParams(window.location.search)
                                    urlParams.set("lg", l)
                                    window.location.search = urlParams.toString();
                                }}
                            >
                                {l}
                            </p>
                        )
                    }
                </li>
            </ul>
        </nav>
    </>
}