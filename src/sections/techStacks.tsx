import contentGlobal from "../lg/gb.json"

export default function TechStacks(){
    return <section id="techStacks">
        <div className="content">
            <h1 className="sectionHeader">Tech Stack</h1>
            {
                contentGlobal.techStack.map((ts, i) => {
                    return <TechStackCard
                        key={i}
                        header={ts.header}
                        content={ts.content}
                        index={i}
                    />
                })
            }
        </div>
    </section>
}

interface ITechStackCard {
    header: string,
    content: {
        src: string,
        title: string
    }[],
    index: number
}

const TechStackCard = (props: ITechStackCard) => {
    if(props.index%2 == 1)
        return <div className="topic">
            <div id="content">
                <h1
                    style={{
                        textAlign: "right"
                    }}
                >
                    {props.header}
                </h1>
                <TechStackCardImage content={props.content}/>
            </div>
            <div id="empty"></div>
        </div>
    return <div className="topic">
        <div id="empty"></div>
        <div id="content">
            <h1
                style={{
                    textAlign: "left"
                }}
            >
                {props.header}
            </h1>
            <TechStackCardImage content={props.content}/>
        </div>
    </div>
}

interface ITechStackCardImage {
    content: {
        src: string,
        title: string
    }[]
}

const TechStackCardImage = (props: ITechStackCardImage) => {

    return <div className="TechStackCardImage">
        {props.content.map((c,i) => {
            if(props.content.length == 3){
                return <div
                    key={i}
                    style={{
                        flex: (i == 2 ? "0 0 100%" : "0 0 50%"),
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem"
                    }}
                >
                    <img 
                        src={c.src}
                        width={64}
                        title={c.title}
                        alt={c.title}
                    />
                </div>
            }
            else if(props.content.length == 4){
                return <div
                    key={i}
                    style={{
                        flex: ([0,3].includes(i) ? "0 0 100%" : "0 0 50%"),
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem"
                    }}
                >
                    <img 
                        src={c.src}
                        width={64}
                        title={c.title}
                        alt={c.title}
                    />
                </div>
            }
            else if(props.content.length == 7){
                return <div
                    key={i}
                    style={{
                        flex: (i == 6 ? "0 0 100%" : "0 0 33.3333%"),
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem"
                    }}
                >
                    <img 
                        src={c.src}
                        width={64}
                        title={c.title}
                        alt={c.title}
                    />
                </div>
            }
            return <div
                key={i}
                style={{
                    flex: (i%5 < 3 ? "0 0 33.3333%" : "0 0 50%"),
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem"
                }}
            >
                <img 
                    src={c.src}
                    width={64}
                    title={c.title}
                    alt={c.title}
                />
            </div>
        })}
    </div>
}