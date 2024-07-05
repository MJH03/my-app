export default function Experience({company, title, duration}){
        return(
            <div className="Experience">
                <h4>{company}</h4> <p style={{textAlign:"right", color: "blue"}}>{duration}</p>
                <p><i>{title}</i></p>
            </div>
        )
}