import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoTerreiroBranco from '../assets/logo-white.svg';

const HeaderConteiner = styled.header`
  position: relative;
  width: auto;
  padding: 3rem;
  background-color: ${props => props.theme.colors.darkblue1};
  color: ${props => props.theme.colors.white1};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1400px) {
    justify-content: space-between;
  }
  .logo-conteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media (min-width: 1400px) {
      flex-direction: row;
      margin: 0;
    }
    img {
      min-width: 25%;
      max-width: 100px;
    }

    h1 {
      font-size: 1.75rem;
      word-break: keep-all;
      white-space: nowrap;
      margin: 0;
    }
  }

  .menu-conteiner {
    position: relative;
    .menu-icon {
      position: absolute;
      font-size: 2rem;
      transform: translate(-3rem, -7.5rem);
      @media (min-width: 1400px) {
        display: none;
      }
    }
  }
`;

const HeaderMenuItems = styled.div`
  width: 100%;
  @media (max-width: 1400px) {
    display: none;
    &.show {
      display: block;
      border: 1px solid ${props => props.theme.colors.darkblue2};
      background-color: ${props => props.theme.colors.darkblue3};
      width: 200px;
      height: auto;
      position: absolute;
      transform: translate(-130%, -7.5rem);
      z-index: 2;
    }
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    .menu-item a {
      position: relative;
      text-align: center;
      padding: 0.5em 0.25em;
      text-decoration: none;
      color: white;
      font-size: 0.9em;
      letter-spacing: 0.05em;
    }

    .menu-item a:hover::after,
    .menu-item a:focus::after {
      position: absolute;
      content: "";
      bottom: -0.002em;
      left: 0;
      right: 0;
      border-bottom: 2px solid white;
    }
  }

  ul * + * {
    margin: 0 1em;
  }
  
  &.show {
    ul {
      flex-direction: column;
    }

    .menu-item:last-child {
      margin: 1em 0 0 0;
    }

    .menu-item {
      white-space: nowrap;
      margin: 1em 0;
    }

    .menu-item a {
      display: block;
      width: 100%;
    }

    .menu-item a:hover::after {
      position: absolute;
      content: "";
      bottom: -0.0005em;
      left: 10px;
      right: 10px;
      border-bottom: 2px solid white;
    }
  }
`;

export default function Header() {
  const [ menuExpanded, setMenuExpanded ] = useState(false);

  function onClickMenuItem(e) {
    e.preventDefault();
    const el = document.getElementById(e.target.attributes.scrollto.value);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', inline: "start"});
    }

    setMenuExpanded(false);
  }

  return (
    <HeaderConteiner>
      <div className="logo-conteiner">
        <img src={logoTerreiroBranco} alt="Logo do terreiro sete espadas"></img>
        <h1>Terreiro Sete Espadas</h1>
      </div>
      <div className="menu-conteiner">
        <span className="menu-icon" onClick={() => setMenuExpanded(!menuExpanded)}>
          <FontAwesomeIcon icon={['fas', 'bars']}/>
        </span>
        <HeaderMenuItems className={`${menuExpanded ? 'show' : ''}`}>
          <ul>
            <li className="menu-item">
              <a href="#terreiro" scrollto="terreiro" onClick={onClickMenuItem}>O Terreiro</a>
            </li>
            <li className="menu-item">
              <a href="#lucas" scrollto="lucas" onClick={onClickMenuItem}>Lucas Maganhato</a>
            </li>
            <li className="menu-item">
              <a href="#fiama" scrollto="fiama" onClick={onClickMenuItem}>Fiama Miranda</a>
            </li>
            <li className="menu-item">
              <a href="#umbanda" scrollto="umbanda" onClick={onClickMenuItem}>Umbanda</a>
            </li>
            <li className="menu-item">
              <a href="#" scrollto="cursos" onClick={onClickMenuItem}>Cursos</a>
            </li>
            <li className="menu-item">
              <a href="#" scrollto="contato" onClick={onClickMenuItem}>Contato</a>
            </li>
            <li className="menu-item">
              <a href="#" scrollto="galeria" onClick={onClickMenuItem}>Galeria</a>
            </li>
          </ul>
        </HeaderMenuItems>
      </div>
    </HeaderConteiner>
  )
}
