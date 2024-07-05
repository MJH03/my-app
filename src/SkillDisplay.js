import PersonalSkill from './PersonalSkill.js';

export default function SkillDisplay({Skills}){
    return (
    <div className="SkillDisplay">
      {Skills.map(skill =>(
        <PersonalSkill
          name = {skill.name}
          proficiency = {skill.proficiency}
        />
      ))}
    </div>
    )
  }