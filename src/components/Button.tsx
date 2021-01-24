import React from 'react'

export const Button = () => {
    const [snowing, setSnowing] = React.useState(true);
  
    const onClick = () => {
      setSnowing(!snowing);
    };
  
    return (
      <div className="buttonContainer">
        <button className="snowButton" onClick={onClick}>
          {snowing ? "Disable the snow 🥶" : "Let it snow! ❄️"}
        </button>
      </div>
    );
  };