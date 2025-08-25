import styled from "styled-components";
import { useEffect, useState } from "react";

function PlaylistItem({ id, playlistId, title }) {
  return (
    <PlaylistCard id={id}>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h3>{title}</h3>
    </PlaylistCard>
  );
}

export default function PlaylistSection({ id, title, medias }) {
  return (
    <SectionContainer id={id}>
      <h2>{title}</h2>
      <div className="medias">
        {medias.map((media) => {
          return <PlaylistItem key={media.id} {...media} />;
        })}
      </div>
    </SectionContainer>
  );
}

export function Navbar({ sections }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160; // compensar navbar fixa
      let current = "";
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          current = sec.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <NavbarContainer>
      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className={active === sec.id ? "active" : ""}
        >
          {sec.title}
        </a>
      ))}
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${(props) => props.theme.colors.primary || "#222"};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  a {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  .active {
    background: ${(props) => props.theme.colors.accent || "#e63946"};
    color: #fff;
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  width: 100%;
  @media (min-width: 680px) {
    width: 70%;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary || "#222"};
    margin-bottom: 1.5rem;
  }

  .medias {
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const PlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.white || "#fff"};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
  }

  .video-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem;
    text-align: center;
    color: ${(props) => props.theme.colors.black || "#333"};
  }
`;
