import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const skills = [
  { skill: 'React', level: 'beginner', color: '#70deffff' },
  { skill: 'HTML+CSS', level: 'advanced', color: 'orangered' },
  { skill: 'JavaScript', level: 'advanced', color: 'yellow' },
  { skill: 'Git and GitHub', level: 'intermediate', color: '#874ab0ff' },
  { skill: 'Java', level: 'intermediate', color: '#fa4d72ff' },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="SeoyeonUm.jpg" alt="Seoyeon Um" />;
}

function Intro() {
  return (
    <div>
      <h1>Seoyeon Um</h1>
      <p>
        Front-end web developer and student. When not coding or taking a course,
        I like to read some books, to enjoy K-pop, or to just hang out with
        childhood friends in my neck of the woods.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skills.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  let emoji = '';
  if (skillObj.level === 'advanced') emoji = '💪🏻';
  else if (skillObj.level === 'intermediate') emoji = '👍🏻';
  else if (skillObj.level === 'beginner') emoji = '👶🏻';

  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
