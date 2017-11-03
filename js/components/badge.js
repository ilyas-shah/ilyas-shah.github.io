import React from 'react';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


class Badge extends React.Component {
  render() {
    var word = this.props.word;
    var wordElement = <div className="gearText" key={word}>{word}</div>;
    return (
      <div className="badge">
        
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={10}
        >
          {wordElement}
        </ReactCSSTransitionGroup>
        <svg className="gear">
          <use xlinkHref="#home"></use>
        </svg>
      </div>
    );
  }
}

export default Badge;
