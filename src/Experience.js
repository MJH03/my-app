export default function Experience({company, title, duration}){
        return(
            <div className="Experience">
                <h4>{company}</h4>
                <p><i>{title}</i>: {duration}</p>
            </div>
        )
}