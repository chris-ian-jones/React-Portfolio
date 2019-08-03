import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// import "semantic-ui-css/semantic.min.css";

const StyledNavContainer = styled.div`
    width: 100vw;
    height: 68px;
    background-color: #242840;
    border: 1px dashed #9AC5C9;
    display: flex;
`

const LogoContainer = styled.div`
    width: 33%;
    // background-color: red;
`

const LinksContainer = styled.nav`
    width: 66%;
    // background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SocialContainer = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #f649a7;
    text-shadow: 0 2px 3px rgba(246,73,167,.5);
    font-size: 1.3rem;
    margin-right: 30px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const StyledSocialLink = styled.a`
    text-decoration: none;
    color: #f649a7;
    text-shadow: 0 2px 3px rgba(246,73,167,.5);
    font-size: 1.3rem;
    margin-right: 30px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

function NavBar() {
    return(    
        <StyledNavContainer>   
            <LogoContainer />
            <LinksContainer>
                <StyledLink to='/blog'>Blog</StyledLink> 
                <StyledLink to='/contact'>Contact</StyledLink>
            </LinksContainer>
            <SocialContainer>
                <StyledSocialLink href="https://www.linkedin.com" target="_blank">
                    LinkedIn
                </StyledSocialLink>
                <StyledSocialLink href="https://www.github.com" target="_blank">
                    GitHub
                </StyledSocialLink>
                <StyledSocialLink href="www.twitter.com" target="_blank">
                    Twitter
                </StyledSocialLink>
            </SocialContainer>
        </StyledNavContainer>
    )
}

export default NavBar
