import styled from "styled-components";

function PlaylistItem({ id, playlistId, title }) {
  return (
    <PlaylistItemConteiner id={id}>
      <h3>{title}</h3>
      <iframe
        width="350"
        height="275"
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </PlaylistItemConteiner>
  );
}

export default function PlaylistSection({ id, title, medias }) {
  return (
    <PlaylistsConteiner>
      <h2>{title}</h2>
      <div className="medias">
        {medias.map((media) => {
          return <PlaylistItem key={media.id} {...media} />;
        })}
      </div>
    </PlaylistsConteiner>
  );
}

const PlaylistItemConteiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: min-content;
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    text-align: center;
  }
`;

const PlaylistsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  h2 {
    text-align: center;
  }
  .medias {
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fit, 390px);
    grid-template-rows: auto;
    gap: 0.5rem;
  
    @media (min-width: 750px) {
      gap: 0.7rem;
    }
    @media (min-width: 1100px) {
      gap: 1rem;
    }
  }
`;
