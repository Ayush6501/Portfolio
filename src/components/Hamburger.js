import React, { Component }  from 'react';
import styled from 'styled-components'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor'

const COLORS = {
  primaryDark: 'black',
  primaryLight: 'white'
}

const Hamburger = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={24}
        color='54, 69, 79'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      <MenuLabel htmlFor='navi-toggle' onClick={handleClick}><Icon clicked={click}>&nbsp;</Icon></MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      {click &&
        <Navigation onClick={handleClick}>
          <MenuText>Menu</MenuText>
          <List>
            <ItemLink to='/'>Home</ItemLink>
            <ItemLink to='/Portfolio'>Portfolio</ItemLink>
            <ItemLink to='/About'>About</ItemLink>
            <ItemLink to='/Contact'>Contact</ItemLink>
            <DummyLink href={'https://github.com/Ayush6501'}>Github</DummyLink>
            <ItemLink to='/Resume'>Resume</ItemLink>
          </List>
        </Navigation>
      }
    </>
  )
}

export default Hamburger;


const MenuLabel = styled.label`
  background-color: ${COLORS.primaryDark};
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  
  @media screen and (max-width: 480px) {
    height: 3em;
    width: 3em;
  }
`;

const NavBackground = styled.div`
  cursor: default;
  position: fixed;
  background-image: radial-gradient(${COLORS.primaryDark}, ${COLORS.primaryLight});
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  right: 15em;

  transform: ${props => props.clicked ? "scale(100)" : "scale(0)"};
  transition: transform 0.7s;

  @media screen and (max-width: 480px) {
    height: 2.5rem;
    width: 2.5rem;
    right: 2em;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${props => props.clicked ? 'transparent' : 'white'};
  width: 1.8rem;
  height: 2px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.2s;

  @media screen and (max-width: 480px) {
    width: 1.5em;
    margin-top: 1.5rem;
  }

  &::before, &::after {
    content: "";
    width: 1.8rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    background-color: white;

    @media screen and (max-width: 480px) {
      width: 1.5em;
    }
  }

  &::before {
    top: ${props => props.clicked ? '0': '-0.5rem' };
    transform: ${props => props.clicked ? 'rotate(135deg)': 'rotate(0)'};
  }

  &::after {
    top: ${props => props.clicked ? '0': '0.5rem' };
    transform: ${props => props.clicked ? 'rotate(-135deg)': 'rotate(0)'};
  }
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ItemLink = styled(Link)`
  font-size:4em;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
  background-size: 240%;
  transition: all 0.4s;
  position: initial;
  margin: 0;
  line-height: 0.9em;

  @media screen and (max-width: 480px) {
    font-size: 2.2em;
  }
  
  &:hover, &:active {
    cursor: pointer;
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

const DummyLink = styled.a`
  font-size:4em;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
  background-size: 240%;
  transition: all 0.4s;
  position: initial;
  margin: 0;
  line-height: 0.9em;

  @media screen and (max-width: 480px) {
    font-size: 2.2em;
  }

  &:hover, &:active {
    cursor: pointer;
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 100%;
`;

const MenuText = styled.h1`
  font-family:  'Rock Salt', sans-serif;
  color: white;
  margin-bottom: 40px;
  font-size: 5em;

  @media screen and (max-width: 480px) {
    font-size: 3em;
    margin-bottom: 10px;
  }
`;
