import React from 'react';
import styled from 'styled-components'
import image from './../src/img/atf-profile.png'

const AboveTheFoldContainer = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
`

const ATFLeftContainer = styled.div`
    width: 60%
    height: 66%;
    border: 1px solid red;
`

const ATFRightContainer = styled.div`
    width: 40%
    height: 66%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid pink;
`

const StyledProfilePic = styled.img`
    height: 85%;
    border-radius: 50%;
`

function Main() {
    return(
        <AboveTheFoldContainer>
            <ATFLeftContainer>

            </ATFLeftContainer>
            <ATFRightContainer>
                <StyledProfilePic src={image} alt="cartoon headshot" />
            </ATFRightContainer>
        </AboveTheFoldContainer>
    )
}

export default Main