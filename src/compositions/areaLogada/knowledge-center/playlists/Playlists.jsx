import { useEffect, useState } from "react";
import styled from "styled-components";

import { useSetToken, useSetUser, useToken } from "../../../../store";
import api from "../../../../services/index";
import PlaylistSection, {
  Navbar,
} from "../../../../components/v2/playlist/Playlist";

async function fetchPlaylists(
  setPlaylists,
  setError,
  setLoading,
  setToken,
  setUser,
  token
) {
  try {
    const response = await api.get(`/playlists`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setPlaylists(response.data);
    setLoading(false);
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
    setLoading(false);
  }
}

export default function Playlists() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  /**
   * @type {[
   * Array<{
   *   id: string
   *   type: string
   *   title: string
   *   medias: Array<{
   *     id: string
   *     playlistId: string
   *     title: string
   *   }>
   * }>, function]}
   */
  const [playlists, setPlaylists] = useState([]);

  const token = useToken();
  const setToken = useSetToken();
  const setUser = useSetUser();
  useEffect(() => {
    fetchPlaylists(
      setPlaylists,
      setError,
      setLoading,
      setToken,
      setUser,
      token
    );
  }, []);

  if (loading) {
    return <>carregando</>;
  }

  if (playlists) {
    return (
      <Wrapper>
        <Navbar sections={playlists} />
        {playlists.map((playlist) => {
          return (
            <>
              <PlaylistSection
                id={playlist.id}
                title={playlist.title}
                medias={playlist.medias}
              />
            </>
          );
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
