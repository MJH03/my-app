import Experience from './Experience.js'

export default function ExperienceDisplay({tenure}){
    return(
        <div className="ExperienceDisplay">
        {tenure.map(Exp => (
            <Experience 
            company = {Exp.company}
            title = {Exp.title}
            duration = {Exp.duration}
            />
        ))}
        </div>
    )
}