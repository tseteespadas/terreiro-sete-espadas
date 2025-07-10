import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PixReforma from "./PixReforma";
import RitualDama from "./RitualDama";

const TEMPO_POR_CARROSSEL = 12 * 1000;
const TEMPO_POR_CARROSSEL_AO_CLICAR = 30 * 1000;
const SWIPE_THRESHOLD = 50;

const CarrosselEventos = () => {
  const components = [
    <RitualDama key="ritual-defuntaria" />,
    <PixReforma key="pix" />,
  ];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const startXRef = useRef(null);

  const clearExistingTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startTimer = (duration) => {
    clearExistingTimer();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % components.length);
    }, duration);
  };

  const handleDotClick = (newIndex) => {
    setIndex(newIndex);
    startTimer(TEMPO_POR_CARROSSEL_AO_CLICAR);
  };

  const handleSwipeStart = (x) => {
    startXRef.current = x;
  };

  const handleSwipeEnd = (x) => {
    if (startXRef.current === null) return;

    const deltaX = x - startXRef.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        // Swipe right: anterior
        setIndex((prev) => (prev - 1 + components.length) % components.length);
      } else {
        // Swipe left: próximo
        setIndex((prev) => (prev + 1) % components.length);
      }
      startTimer(TEMPO_POR_CARROSSEL_AO_CLICAR);
    }

    startXRef.current = null;
  };

  useEffect(() => {
    startTimer(TEMPO_POR_CARROSSEL);

    return () => clearExistingTimer();
  }, []);

  return (
    <CarouselContainer
      onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX)}
    >
      {components.map((Component, i) => (
        <SlideWrapper key={i} isVisible={i === index}>
          {Component}
        </SlideWrapper>
      ))}

      <Indicators>
        {components.map((_, i) => (
          <Dot key={i} active={i === index} onClick={() => handleDotClick(i)} />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

export default CarrosselEventos;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  height: auto;
`;

const SlideWrapper = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.black};
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#007bff" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s;
`;
