import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FormInscricao from '../components/FormInscricao';
import FormInteresse from "../components/FormInteresse";

import { apiCursos, apiInscricao } from '../services/api';

import logo from "../assets/logo-white.svg";
import imagem2 from "../assets/cursos/desenvolvimento1.jpeg";
import imagem3 from "../assets/cursos/desenvolvimento2.jpeg";

const HeaderConteiner = styled.header`
  position: relative;
  width: 100%;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.colors.darkblue1};
  color: ${(props) => props.theme.colors.white1};
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    &:focus,
    &:hover {
      text-decoration: none;
    }
  }
  .logo-conteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media (min-width: 1400px) {
      margin: 0;
    }
    img {
      min-width: 25%;
      max-width: 100px;
      min-height: 25%;
      max-height: 100px;
    }

    h1 {
      font-size: 1.75rem;
      margin: 0;
      text-align: center;
      color: ${(props) => props.theme.colors.white1};
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

const Content = styled.section`
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.white1};
`;

const Description = styled.div`
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    & > .img-conteiner {
      flex-basis: 25%;
    }

    & > .desc-conteiner {
      flex-basis: 50%;
    }

    & > * + * {
      margin-left: 2em;
    }
  }

  .img-conteiner img {
    display: block;
    max-width: 100%;
    margin: 1em 0;
  }

  .desc-conteiner {
    p {
      text-align: justify;
      text-justify: inter-word;
      max-width: 80%;
      margin: 1em auto;
    }

    p.t-center {
      text-align: center;
    }

    h3 {
      margin-top: 0.5em;
      font-size: 1.75em;
      font-weight: 700;
      color: ${(props) => props.theme.colors.darkblue3};
      text-align: center;
    }
  }
`;

const Inscricoes = styled.div`
  background-color: ${(props) => props.theme.colors.darkblue3};
  display: flex;
  padding: 3rem;
  .content {
    max-width: 1100px;
    margin: 0 auto;
    flex-direction: column;
    h3 {
      margin: 1em 0;
      font-size: 1.75em;
      font-weight: 700;
      color: ${(props) => props.theme.colors.white1};
      text-align: center;
    }

    .form-label,
    .form-text {
      color: ${(props) => props.theme.colors.white2} !important;
    }

  }
`;

export default function Desenvolvimento() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [err, setError] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);

  useEffect( () => {
    setLoading(true);
    apiCursos
      .get(`/exec?curso=desenvolvimento`)
      .then((response) => {
        setCourses(response.data.desenvolvimento);  
        setLoading(false);
      }).catch((error) => {
        console.error(error);
        setError(true);
      })
  }, []);

  function handleSubmitInteresse(e) {
    e.preventDefault();
    const email = e.target.formEmail.value;
    const nome = e.target.formNome.value;
    const telefone = e.target.formTel.value;

    const data = {
      type: "insterest",
      email,
      nome,
      telefone,
      data: new Date(),
      curso: "desenvolvimento"
    }
  }

  function handleSubmitInscricao(e) {
    e.preventDefault();
    const email = e.target.formEmail.value;
    const nome = e.target.formNome.value;
    const telefone = e.target.formTel.value;
    const rg = e.target.formRG.value;
    
    const data = {
      type: "subscription",
      email,
      nome,
      telefone,
      rg,
      data: new Date(),
      curso: "desenvolvimento",
      turma: courses[0].nome
    }

  }

  return (
    <>
      <HeaderConteiner>
        <Link to="/">
          <div className="logo-conteiner">
            <img src={logo} alt="Logo do terreiro sete espadas"></img>
            <h1>Desenvolvimento Mediúnico</h1>
          </div>
        </Link>
      </HeaderConteiner>
      <Content>
        <Description>
          <div className="img-conteiner">
            <img src={imagem2}></img>
          </div>
          <div className="desc-conteiner">
            <h3>Sobre o Curso:</h3>
            <p>
              <span className="ml-4">O</span> desenvolvimento não se resume em “aprender a incorporar”, pois
              acreditamos que seja um momento de reencontro com os seus.
            </p>
            <p>
              <span className="ml-4">Iremos</span> dividir essa jornada em duas etapas: A primeira será
              inteiramente teórica com duração de 5 meses, nas quais iremos
              construir a base que todo umbandista deve possuir em sua fundação,
              através do estudo dos fundamentos, rituais e noções básicas da
              religião e na segunda etapa iremos realizar os rituais práticos,
              com a realização dos amacís nas vibrações dos orixás e
              incorporação não somente das linhas de trabalho, mas também de
              seus princípios e de suas representações em nossas vidas.
            </p>
            <p><span className="ml-4">Este</span> curso será ministrado presencialmente.</p>

            <h3>Turmas:</h3>
            {
              loading && (
                <p className="t-center">
                  Carregando dados do curso...
                </p>
              )
            }

            { err && (
              <>
                <p className="t-center">
                  Ops! Tivemos um problema para carregar os dados de novas turmas... 😔 
                </p>
                <p>
                  <span className="ml-4">Já</span> estamos procurando uma solução para o problema, mas até lá, disponibilizamos
                  um formulário para você registrar seu interesse no curso!
                  <br />
                  Axé! 🙏
                </p>
              </>
            )}

            {
              !err && (
                <>
                  {(!loading && courses.length === 0) && (
                    <>
                      <p>
                        <span className="ml-4">No</span> momento não há turmas abertas para novas inscrições mas, não desanime, 
                        em breve abriremos novas vagas! 
                      </p>
                      <p>
                        <span className="ml-4">Até</span> lá, registre seu interesse no formulário de pré-inscrição logo abaixo, 
                        assim entraremos em contato com você logo que uma nova turma for aberta!
                        <br />
                        Axé! 🙏
                      </p>
                    </>
                  )}

                  {(!loading && courses.length !== 0) && (
                    <>
                      <p>
                        <strong>Início:</strong> {courses[0].data_inicio}
                        <br />
                        <strong>Taxa de Matrícula:</strong> R$ { Number(courses[0].valor_inscricao.replace(",", ".")).toFixed(2).toString().replace('.',',') }
                        <br />
                        <strong>Mensalidade:</strong> R$ { Number(courses[0].valor_mensalidade.replace(",", ".")).toFixed(2).toString().replace('.',',') }
                      </p>
                      <p>
                        <span className="ml-4">Caso</span> tenha interesse no curso de Desenvolvimento Mediúnico, inscreva-se 
                        utilizando o formulário abaixo, assim enviaremos todas as informações que você vai precisar para iniciar 
                        essa nova jornada com a gente!
                      </p>
                      <p>
                        <strong><span className="ml-4">A</span> data limite de inscrições vai até {courses[0].data_limite_inscricoes}, 
                        não perca essa oportunidade!</strong>
                      </p>
                      <p className="t-center">
                        Nos vemos em breve!
                        <br />
                        Axé! 🙏
                      </p>
                    </>
                  )}
                </>
              )
            }
          </div>
          <div className="img-conteiner">
            <img src={imagem3}></img>
          </div>
        </Description>
      </Content>
      <Inscricoes>
        <div className="content">
          <h3>Inscrições</h3>
          { 
            err && (
              <FormInteresse handleSubmit={handleSubmitInteresse} />
            )
          }
          { 
            !err && (
              <>
                {(!loading && courses.length === 0) && (
                  <FormInteresse handleSubmit={handleSubmitInteresse} />
                )}
                
                {(!loading && courses.length !== 0) && (
                  <FormInscricao handleSubmit={handleSubmitInscricao} />
                )}
              </>
            )
          }
        </div>
      </Inscricoes>
    </>
  );
}
