import React from "react";
import Icon from "./icon";

export default class IconBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const that = this;
    return (
      <div className="iconBlock">
          <Icon
            name="home"
            to="/"
            onMouseOverEvent={() => {return;}}
            onMouseOutEvent={() => {return;}}
            /> 
          <Icon
            name="talks"
            to="/talks"
            onMouseOverEvent={() => {return;}}
            onMouseOutEvent={() => {return;}}
            />
          <Icon
            name="twitter"
            href="https://twitter.com/majidnisar"
            onMouseOverEvent={() => {return;}}
            onMouseOutEvent={() => {return;}}
            />
          <Icon
            name="github"
            href="https://github.com/majidnisar"
            onMouseOverEvent={() => {return;}}
            onMouseOutEvent={() => {return;}}
            /> 
          <Icon
            name="linkedin"
            href="https://www.linkedin.com/in/majidnisar/"
            onMouseOverEvent={() => {return;}}
            onMouseOutEvent={() => {return;}}
            /> 
           
           <Icon
            name="codePen"
            href="https://codepen.io/majidnisar"
            onMouseOverEvent={() => {return;}}
            onMouseOutEvent={() => {return;}}
            /> 
          <Icon
            name="hobbyist"
            href="https://github.com/majidnisar"
            onMouseOverEvent={() => {return;}}
            onMouseOutEvent={() => {return;}}
            /> 
        </div>
    );
  }
}
