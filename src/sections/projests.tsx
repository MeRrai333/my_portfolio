import { useState, useEffect } from "react"
import LanguageEN from "../lg/en.json"
import LanguageTH from "../lg/th.json"
import contentGlobal from "../lg/gb.json"

const projectLanguages = [
    {
        label: "Javascript/Typescript"
    },
    {
        label: "C#"
    },
    {
        label: "Java"
    },
    {
        label: "Python"
    },
    {
        label: "PHP"
    },
    {
        label: "IoT"
    }
]

export default function Projects(){
    const [selectLanguage, setSelectLanguage] = useState(0)
    const [contentText, setContentText] = useState(LanguageEN)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if(params.get("lg") == "TH")
            setContentText(LanguageTH)
        else if(params.get("lg") == "EN" || !params.get("lg"))
            setContentText(LanguageEN)
    }, [])

    return <section id="projects">
        <div className="content">
            <h1 className="sectionHeader"
                style={{
                    textAlign: "right"
                }}
            >
                Projects
            </h1>
            <div className="details">
                <div className="projectLanguages">
                    <select
                        value={selectLanguage}
                        onChange={(e) => {
                            setSelectLanguage(Number(e.target.value))
                        }}
                    >
                        {
                            projectLanguages.map((pl,i) =>
                                <option key={i} value={i}>{pl.label}</option>
                            )
                        }
                    </select>
                </div>
                <div className="cardList">
                    {
                        contentGlobal.projects[selectLanguage].map((c,i) => {
                            return <ProjectCard 
                                key={i}
                                name={c.name}
                                link={c.link}
                                tools={c.tools}
                                content={contentText.projects.detail[selectLanguage][i]}
                                restrictText={contentText.projects.restrict}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    </section>
}

interface IProjectCard {
    name: string,
    link: string,
    tools: string[],
    content: string,
    restrictText: string
}

const ProjectCard = (props: IProjectCard) => {
    return <div className="card">
        <h2>{props.name}</h2>
        <p
            style={{
                paddingBottom: "1rem"
            }}
        >
            Link: {
                props.link != "-"
                ? <a
                    target="_blank"
                    href={props.link}
                >
                    {props.link}
                </a>
                : <span
                    style={{
                        fontWeight: "bold",
                        color: "yellow"
                    }}
                >
                    {props.restrictText}
                </span>
            }
        </p>
        <p>{props.content}</p>
        <h3>Tools</h3>
        <ul>
            {props.tools.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
    </div>
}