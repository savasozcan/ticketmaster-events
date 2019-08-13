// Packages
import React from "react";
import styled, { keyframes } from 'styled-components';

// Styles
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LoaderItem = styled.div`
    margin: 0 auto;
    vertical-align: center;
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #3498db;
    width: 60px;
    height: 60px;
    -webkit-animation: ${rotate} 2s linear infinite; /* Safari */
    animation: ${rotate} 2s linear infinite;
`


export class Loader extends React.Component {
  render() {
    return(
        <div>
            <LoaderItem></LoaderItem>
        </div>
    );
  }
}


export default Loader;
