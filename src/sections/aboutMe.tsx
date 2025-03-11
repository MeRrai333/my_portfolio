import myselfPng from "../assets/myself_2.png"
import LanguageTH from "../lg/th.json"
import LanguageEN from "../lg/en.json"
import { useState, useEffect } from "react"


export default function AboutMe(){
    const [contentText, setContentText] = useState(LanguageEN)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if(params.get("lg") == "TH")
            setContentText(LanguageTH)
        else if(params.get("lg") == "EN" || !params.get("lg"))
            setContentText(LanguageEN)
    }, [])

    return <section id="aboutMe">
        <div>
            <img 
                src={myselfPng}
                className="myselfPng"
            />
        </div>
        <div className="contentSide">
            <div className="content">
                <h1 className="topic sectionHeader">About me</h1>
                {
                    contentText.aboutMe.map((am, i) => {
                        if(!Array.isArray(am))
                            return <SubTopicList key={i} header={am.header} content={am.content}/>
                        return <SubTopicListArray key={i} topic={am}/>
                    })
                }
            </div>
        </div>
    </section>
}

interface ISubTopicList {
    header: string,
    content: string | string[]
}

const SubTopicList = (props: ISubTopicList) => {
    return <div className="subTopic">
        <h1>{props.header}</h1>
        {
            typeof props.content == "string"
            ? <p>{props.content}</p>
            : <ul
                style={{margin: "0"}}
            >
                {
                    props.content.map((c, i) => 
                        <li key={i}>{c}</li>
                    )
                }
            </ul>
        }
    </div>
}

interface ISubTopicListArray {
    topic: ISubTopicList[]
}

const SubTopicListArray = (props: ISubTopicListArray) => {
    return <div className="subTopicArray">
        {
            props.topic.map((t, i) => 
                <SubTopicList key={i} header={t.header} content={t.content}/>
            )
        }
    </div>
}