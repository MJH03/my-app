export default function University({college, degree, years}){
    return(
        <div className="University">
            <h4>{college}</h4><p style={{textAlign:"right", color: "blue"}}>{years}</p>
            <p>{degree}</p>
        </div>
    )
}