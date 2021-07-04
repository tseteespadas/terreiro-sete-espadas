import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FormInscricao from "../components/FormInscricao";
import FormInteresse from "../components/FormInteresse";
import { Alert } from "react-bootstrap";

import { apiCursos, apiInscricao } from "../services/api";

import logo from "../assets/logo-white.svg";
import imagem2 from "../assets/cursos/zepelintra1.jpg";
import imagem3 from "../assets/cursos/zepelintra2.jpg";

const HeaderConteiner = styled.header`
  position: relative;
  width: auto;
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
      word-break: keep-all;
      white-space: nowrap;
      margin: 0;
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

    h2 {
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
    h2 {
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

export default function Teologia() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [err, setError] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [inscrito, setInscrito] = useState(null);
  const [inscritoMessage, setInscritoMessage] = useState(null);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiCursos
      .get(`/exec?curso=zepelintra`)
      .then((response) => {
        setCourses(response.data.zepelintra);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  function handleSubmitInteresse(e) {
    e.preventDefault();
    const email = e.target.formEmail.value;
    const nome = e.target.formNome.value;
    const telefone = e.target.formTel.value;
    if (email === "" || nome === "" || telefone === "") {
      setFormError(true);
    } else {
      const data = {
        type: "interest",
        email,
        nome,
        telefone,
        data: new Date(),
        curso: "zepelintra",
      };
      setLoadingPost(true);
      apiInscricao
        .get(
          `/exec?curso=${data.curso}&data=${data.data}&email=${data.email}&nome=${data.nome}&telefone=${data.telefone}&type=${data.type}`
        )
        .then((response) => {
          console.log("inscrição realizada com sucesso.");
          setLoadingPost(false);
          setInscrito(true);
          setInscritoMessage(response.data.message);
        })
        .catch((error) => {
          console.error(error);
          setLoadingPost(false);
          setInscrito(false);
        });
    }
  }

  function handleSubmitInscricao(e) {
    e.preventDefault();
    const email = e.target.formEmail.value;
    const nome = e.target.formNome.value;
    const telefone = e.target.formTel.value;
    const rg = e.target.formRG.value;
    if (email === "" || nome === "" || telefone === "" || rg === "") {
      setFormError(true);
    } else {
      const data = {
        type: "subscription",
        email,
        nome,
        telefone,
        rg,
        data: new Date(),
        curso: "zepelintra",
        turma: courses[0].nome,
      };
      setLoadingPost(true);
      apiInscricao
        .get(
          `/exec?curso=${data.curso}&turma=${data.turma}&data=${data.data}&email=${data.email}&nome=${data.nome}&telefone=${data.telefone}&rg=${data.rg}&type=${data.type}`
        )
        .then((response) => {
          console.log("interesse registrado com sucesso.");
          setLoadingPost(false);
          setInscrito(true);
          setInscritoMessage(response.data.message);
        })
        .catch((error) => {
          console.error(error);
          setLoadingPost(false);
          setInscrito(false);
        });
    }
  }

  return (
    <>
      <HeaderConteiner>
        <Link to="/">
          <div className="logo-conteiner">
            <img src={logo} alt="Logo do terreiro sete espadas"></img>
            <h1>Zé Pelintra</h1>
          </div>
        </Link>
      </HeaderConteiner>
      <Content>
        <Description>
          <div className="img-conteiner">
            <img src={imagem2}></img>
          </div>
          <div className="desc-conteiner">
            <h2>Detalhes:</h2>
            <p>
              <span className="ml-4">De</span> mestre da Jurema aos morros cariocas 
              muitas pessoas dentro e fora dos terreiros de umbanda já ouviram falar sobre 
              Zé Pelintra, mas quem realmente ele é?
            </p>
            <p>
              <span className="ml-4">De</span> exú a baiano, hoje o malandro é uma das 
              entidades mais icônicas da umbanda, mas será que fora os tabus e conhecimentos 
              passados de boca em boca sabemos quem ele é e o que representa?
            </p>
            <p>
              <span className="ml-4">Em</span> nosso curso, iremos abordar todos os "mistérios" 
              que envolvem o malandro Zé Pelintra desde sua origem até sua "morte"!
            </p>
            <p>
              <span className="ml-4">Este</span> curso tem duração de 1 (um) dia e será ministrado
              pela plataforma Zoom (<a href="https://zoom.us/download" rel="noopener noreferrer">Link para download</a>)
            </p>
            <h2>Turmas:</h2>
            {loading && (
              <p className="t-center">Carregando dados do curso...</p>
            )}

            {err && (
              <>
                <p className="t-center">
                  Ops! Tivemos um problema para carregar os dados de novas
                  turmas... 😔
                </p>
                <p>
                  <span className="ml-4">Já</span> estamos procurando uma
                  solução para o problema, mas até lá, disponibilizamos um
                  formulário para você registrar seu interesse no curso!
                  <br />
                  Axé! 🙏
                </p>
              </>
            )}

            {!err && (
              <>
                {!loading && courses.length === 0 && (
                  <>
                    <p>
                      <span className="ml-4">No</span> momento não há turmas
                      abertas para novas inscrições mas, não desanime, em breve
                      abriremos novas vagas!
                    </p>
                    <p>
                      <span className="ml-4">Até</span> lá, registre seu
                      interesse no formulário de pré-inscrição logo abaixo,
                      assim entraremos em contato com você logo que uma nova
                      turma for aberta!
                      <br />
                      Axé! 🙏
                    </p>
                  </>
                )}

                {!loading && courses.length !== 0 && (
                  <>
                    <p>
                      <strong>Início:</strong> {courses[0].data_inicio}
                      <br />
                      <strong>Taxa de Matrícula:</strong> R${" "}
                      {Number(courses[0].valor_inscricao.replace(",", "."))
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")}
                      <br />
                      <strong>Mensalidade:</strong> R${" "}
                      {Number(courses[0].valor_mensalidade.replace(",", "."))
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")}
                    </p>
                    <p>
                      <span className="ml-4">Caso</span> tenha interesse no
                      curso de Zé Pelintra, inscreva-se utilizando o
                      formulário abaixo, assim enviaremos todas as informações
                      que você vai precisar para iniciar essa nova jornada com a
                      gente!
                    </p>
                    <p>
                      <strong>
                        <span className="ml-4">A</span> data limite de
                        inscrições vai até {courses[0].data_limite_inscricoes},
                        não perca essa oportunidade!
                      </strong>
                    </p>
                    <p className="t-center">
                      Nos vemos em breve!
                      <br />
                      Axé! 🙏
                    </p>
                  </>
                )}
              </>
            )}
          </div>
          <div className="img-conteiner">
            <img src={imagem3}></img>
          </div>
        </Description>
      </Content>
      <Inscricoes>
        <div className="content">
          <h2>Inscrições</h2>
          {formError && (
            <Alert
              variant={"danger"}
              onClose={() => setFormError(false)}
              dismissible
            >
              Os dados do formulário estão inválidos. Verifique-os e tente
              novamente.
            </Alert>
          )}
          {loadingPost && (
            <Alert variant={"info"}>Enviando dados do formulário...</Alert>
          )}
          {!loadingPost && (
            <>
              {inscrito && <Alert variant={"success"}>{inscritoMessage}</Alert>}
              {inscrito === false && (
                <Alert variant={"danger"}>
                  Ops! Tivemos um problema para registrar seus dados. Entre em
                  contato com tseteespadas@gmail.com.
                </Alert>
              )}
            </>
          )}
          {loading && <p>Carregando formulário de inscrição...</p>}
          {err && <FormInteresse handleSubmit={handleSubmitInteresse} />}
          {!err && (
            <>
              {!loading && courses.length === 0 && (
                <FormInteresse handleSubmit={handleSubmitInteresse} />
              )}

              {!loading && courses.length !== 0 && (
                <FormInscricao handleSubmit={handleSubmitInscricao} />
              )}
            </>
          )}
        </div>
      </Inscricoes>
    </>
  );
}
