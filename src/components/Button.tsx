import React from 'react'
import styled from 'styled-components'

export const Button = () => {
    const [snowing, setSnowing] = React.useState(true);
  
    React.useEffect(() => {
        chrome.runtime.sendMessage({ type: "REQ_SNOW_STATUS" });
    
        chrome.runtime.onMessage.addListener((message) => {
          switch (message.type) {
            case "SNOW_STATUS":
              setSnowing(message.snowing);
              break;
            default:
              break;
          }
        });
    }, []);
    
    const onClick = () => {
    chrome.runtime.sendMessage({ type: "TOGGLE_SNOW", snowing: !snowing });
    };
  
    return (
      <ButtonContainer>
        <SnowButton onClick={onClick}>
          {snowing ? "Disable the snow 🥶" : "Let it snow! ❄️"}
        </SnowButton>
      </ButtonContainer>
    );
};

const ButtonContainer = styled.div`
    display: flex;
    background-color: #282c34;
    color: white;
    min-width: 150px;
    padding: 10px;
`

const SnowButton = styled.button`
    border: 0;
    background-color: #1a1d22;
    color: white;
    padding: 5px 10px;
    width: 100%;
    cursor: pointer;
`