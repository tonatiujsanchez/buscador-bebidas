import React from 'react'
import styled from 'styled-components'

const Spinner = () => {
    return (
        <SpinnerContainer>
            <div className='spinner'></div>
        </SpinnerContainer>
    )
}

const SpinnerContainer = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    margin-top: 64px;
    .spinner {
        border: 6px solid rgba(0, 0, 0, 0.1);
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border-left-color: #EC3A49;
            
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% {
          transform: rotate(0deg);
        }   
        100% {
          transform: rotate(360deg);
        }
    }
`

export default Spinner