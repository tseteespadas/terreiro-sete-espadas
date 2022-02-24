import React from 'react';
import styled from 'styled-components';

const MosaicConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    position: relative;
    font-size: 2em;
    font-weight: 700;
    margin: 1.75em 0;
    letter-spacing: 0.025em;
    color: ${(props) => props.theme.colors.white1};
    text-align: center;
    &::after {
      position: absolute;
      content: "";
      bottom: -0.0125em;
      left: 0;
      right: 0;
      border-bottom: 2px solid ${(props) => props.theme.colors.white2};
    }
  }
  .galeria-description {
    display: flex;
    flex-direction: column;
    margin: 1em 0 0 0;

    a:hover,
    a:focus {
      outline: 2px solid white;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 1em 0;
    }

    .span-2 {
      grid-column-end: span 1;
      grid-row-end: span 2;
    }
  }

  @media (min-width: 1100px) {
    .galeria-description {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: minmax(250px, auto);
      grid-auto-flow: dense;
      grid-column-gap: .5em;
      grid-row-gap: .5em;
    }
    
    .galeria-description img {
      margin: 0;
    }
  }
`;

export default function Mosaic(props) {
  const { children } = props;
  return (
    <MosaicConteiner>
      {children}
    </MosaicConteiner>
  );
}
