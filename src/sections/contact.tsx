const contactList = [
    {
        icon: "fa fa-github",
        link: "https://github.com/MeRrai333"
    },
    {
        icon: "fa fa-linkedin-square",
        link: "https://www.linkedin.com/in/methit-sompitak-2545452b0/"
    }
]

export default function Contact(){
    return <section id="contact">
        {
            contactList.map((c, i) =>
                <div key={i}>
                    <a href={c.link} target="_blank" style={{color: "inherit"}}>
                        <i className={c.icon} style={{fontSize: "36px"}}></i>
                    </a>
                </div>
            )
        }
        <div>
            <p>mm.methit@gmail.com</p>
        </div>
    </section>
}