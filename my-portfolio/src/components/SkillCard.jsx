import { skillIcons } from './skillIcons'

function SkillCard({ iconName, category, title, description }) {
  const Icon = skillIcons[iconName]

  return (
    <article className="skill-card">
      {/* Imported icon for the skill */}
      <div className="skill-icon" aria-hidden="true">
        {Icon ? <Icon /> : null}
      </div>
      <p className="skill-category">{category}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default SkillCard
