import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

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

function SkillList() {}

function Skill() {}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
