import { useEffect, useState } from "react";
import styled from "styled-components";

import Playlist from "../../../../components/v2/playlist/Playlist";

import { useSetToken, useSetUser, useToken } from "../../../../store";
import api from "../../../../services/index";

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
        <h1>Playlists</h1>
        <PlaylistsConteiner>
          {playlists.map((playlist, idx) => {
            return (
              <>
                <Playlist key={playlist.id} {...playlist}></Playlist>
                {idx + 1 !== playlists.length && <hr />}
              </>
            );
          })}
        </PlaylistsConteiner>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 1em;
  h1 {
    text-align: center;
  }
`;

const PlaylistsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  hr {
    width: 100%;
  }
`;
