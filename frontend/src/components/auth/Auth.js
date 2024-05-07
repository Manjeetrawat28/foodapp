// import styled  from 'styled-components'
// import background from '../../img/sing-up-background.jpg'

// const StyledInitSession = styled.main`
//     min-height: 100vh;
//      background-color: 2px solid ${props => props.theme.lightYellow};
// background : url(${background}) no-repeat right top ;
// display: flex;
// justify-content:center;
// align-items: center;
// width:100vw;
// padding:5px;
// padding-top:60px;
// text-aling:center;

// `;



// export default function Auth(props) {

  
//   return(
//   <StyledInitSession>
// {props.children}
//   </StyledInitSession>


// )
// }
import React from 'react';
import styled from 'styled-components';
import background from '../../img/sing-up-background.jpg';

const StyledInitSession = styled.main`
  min-height: 100vh;
  background: url(${background}) no-repeat right top;
  background-color: ${(props) => props.theme.lightYellow};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 5px;
  padding-top: 60px;
  text-align: center;
`;

export default function Auth(props) {
  return (
    <StyledInitSession>
      {props.children}
    </StyledInitSession>
  );
}
