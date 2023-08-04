import './App.css';

function App() {
  return <div>
      <Card/>
  </div>
}

function Card () {
  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00"
    }
  ];
  return <div className='card'>
    <Avatar image='https://8szvtk.csb.app/jonas.jpeg' />
    <Intro name='Jonas Schmedtmann' description='Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.'/>
    <SkillList skills={skills}/>
  </div>
};

function Avatar({image}) {
  return <div>
    <img src={image} alt="Jonas" className='avatar'></img>
  </div>
}

function Intro({name, description}) {
  return <div className='intro'>
    <div className='name'>{name}</div>
    <div className='description'>
      {description}
    </div>
  </div>
}

function SkillList({skills}) {
  return <div className='skill-list'>
    {
      skills.map(skill => <Skill skill={skill}/>)
    }
  </div>
}

function Skill({skill}) {
  let emoji;
  if(skill.level === 'beginner') {
    emoji = '👶';
  } else if(skill.level === 'intermediate') {
    emoji = '👍';
  } else {
    emoji = '💪';
  }
  return <div style={{backgroundColor : skill.color}} className='skill'>
    <div>{skill.skill} <span>{emoji}</span></div>
  </div>
}

export default App;
