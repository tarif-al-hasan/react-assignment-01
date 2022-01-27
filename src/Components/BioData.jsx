import React from "react";

function BioData(props) {
  return (
    <div className="container">
      <h1 className="b-title">My Bio Data</h1>
      <div className="row">
        <div className="BioData-left">
          <h1>Name :{props.name}</h1>
          <p>{props.subtitle}</p>
          {/* EXPERIENCE */}
          <div className="work-experince">
            <h1 className="title">EXPERIENCE</h1>
            <hr />
            <h2>Web Developer</h2>
            <span>Interactive cares</span>
            <ul className="experince">
              {props.experince.map((experince) => {
                return <li>{experince}</li>;
              })}
            </ul>
          </div>
          {/* skill */}
          <div className="skill">
            <h1 className="title">SKILLS</h1>
            <hr />
            <h2>Web Developer</h2>
            <ul className="skill">
              {props.skill.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="BioData-right">
          <div className="EDUCATION">
            <h1 className="title">EDUCATION</h1>
            <hr />
            <ul className="education">
              {props.education.map((education) => {
                return <li>{education}</li>;
              })}
            </ul>
          </div>
          <div className="EDUCATION">
            <h1 className="title">CAREER OBJECTIVE</h1>
            <hr />
            <span>{props.carrer}</span>
          </div>
          <div className="contact">
            <h1>Contact</h1>
            <hr />
            <ul>
              <a href="#">Phone : {props.phone}</a> <br />
              <a href="#">Facebook :{props.facebook}</a> <br />
              <a href="">Linkden :{props.linkden}</a> <br />
              <a href="#"> Github :{props.gitub}</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioData;
