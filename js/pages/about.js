import React from "react";
import IconBlock from "../components/icon-block";

export default class Talks extends React.Component {
  render() {
    return (
      <div className="beautiful">
        <div className="contentBlock">
          <IconBlock />
          <div className="content scroll">
            <div className="about">
              <div className="aboutme">
                <img className="selfie" src="http://majidnisar.com/img/avatar.jpg" />
                <div className="job">
                  <h1>Jen Luker</h1>
                  <div>Lead Software Engineer</div>
                  <div>Deseret Digital Media</div>
                </div>
              </div>

              <h2>Bio</h2>
              <blockquote>
                Majid Nisar is   Project Manager/ Head  software Development & Devops
                at E-Resolute Consultancy and Services (P) Ltd. While he enjoys
                vintage cars, he really loves working on the Cars team. Majid has
                spent a majority of her decade-long career as a full-stack
                developer using DOT Net technologies, Javascript, and CSS, but has a particular
                fondness for front-end technologies. When he is not solving problems or learning new
                technologies, his spare time is spent clicking pictures he also enjoyes reading fiction (especially
                sci-fi, mystery, and trashy period romance novels), and is
                fascinated by space.
              </blockquote>

              <h2>What I say about me</h2>
              <blockquote>
                I am single, one nephew and Neice and a wonderful family , all of whom
                understand my need to learn more , grow more every day ,something to calm my overclocked mind.
              </blockquote>

              <h2>What others say about me</h2>

              <blockquote>I would probably describe Majid as a smart, yet, insightful person. He is thoughtful on his approach to software problems while still considering the people working on them and people using them. Outside of work she's been a great person to get to know and I've enjoyed our chats.</blockquote>
              <div className="cite">
                <a href="https://twitter.com/cdabid">Abid Rashid</a>
              </div>

              <blockquote>
                When she gave her very first talk she came across as someone who wouuld done it a hundred times before & it was awesome to see.
              </blockquote>
              <blockquote>
                Majid Nisar:Maturity is a curve going up from reaction to response.
              </blockquote>


            </div>
          </div>
        </div>
      </div>
      </div >
    );
  }
}
