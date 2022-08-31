export default function Skills(props) {
  return (
    <div className="skill-card">
      <img src={props.nameImage} alt={props.alt} className="skill-img" />
      <h1 className="skill-name">{props.skillName}</h1>
    </div>
  )
}
