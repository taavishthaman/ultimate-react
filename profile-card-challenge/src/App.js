import './App.css';

function App() {
  return <div>
      <Card/>
  </div>
  
}

function Card () {
  return <div className='card'>
    <Avatar image='https://8szvtk.csb.app/jonas.jpeg' />
    <Intro name='Jonas Schmedtmann' description='Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.'/>
    <SkillList skills={[
      {skillName : 'React', emoji : '💪', background : 'orangeBack'},
      {skillName : 'HTML+CSS', emoji : '💪', background : 'blueBack'},
      {skillName : 'Javascript', emoji : '💪', background : 'limegreenBack'},
      {skillName : 'Node', emoji : '👶', background : 'greenBack'},
      {skillName : 'Git and Github', emoji : '👍', background : 'orangeBack'}
    ]}/>
  </div>
};

function Avatar(props) {
  return <div>
    <img src={props.image} alt="Jonas" className='avatar'></img>
  </div>
}

function Intro(props) {
  return <div className='intro'>
    <div className='name'>{props.name}</div>
    <div className='description'>
      {props.description}
    </div>
  </div>
}

function SkillList(props) {
  return <div className='skill-list'>
    {
      props.skills.map(skill => <Skill skill={skill}/>)
    }
  </div>
}

function Skill(props) {
  return <div className={`skill ${props.skill.background}`}>
    <div>{props.skill.skillName} <span>{props.skill.emoji}</span></div>
  </div>
}

export default App;
