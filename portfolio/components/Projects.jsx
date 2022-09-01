export default function Projects (props) {

  let projectLink = `https://github.com/clemzouuu/${props.link}` 
  let titleStyle = {
    color: props.titleColor ? 'black' : 'white',
  }

  console.log(props.titleColor)

  let infoStyle = {
    color: props.infoColor ? 'black' : 'white',
    paddingLeft : 10
  }

  return (
    <div className="project-card">
      <a href={projectLink} target="_blank">
        <p className="goToLink">Voir le projet</p>
      </a>
      <img src={props.image} alt={props.alt} className="project-img" />
      <div className="project-content">
        <h1 className="project-title" style={titleStyle}>
          {props.title}
        </h1>
        <p className="project-info" style={infoStyle}>
          {props.info}
        </p>
      </div>
    </div>
  )

  }