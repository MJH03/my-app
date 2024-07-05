import University from "./University";

export default function UniversityDisplay({education}){
    return(
        <div className="UniversityDisplay">
            {education.map(knowlege =>(
                <University 
                    college = {knowlege.college}
                    degree = {knowlege.degree}
                    years = {knowlege.years}
                />
            ))}
        </div>
    )
}