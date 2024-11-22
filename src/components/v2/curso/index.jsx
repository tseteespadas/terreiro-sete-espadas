import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation, useQuery } from "react-query";
import { Alert } from "react-bootstrap";

import FormInscricao from "../forms/FormInscricao";
import Loading from "../conteiners/Loader";

import api from "../../../services";

const InstrucoesConteiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  /* padding: 1rem 0; */
  p {
    @media (min-width: 900px) {
      max-width: 850px;
    }

    text-align: justify;
    text-justify: inter-word;
    font-size: 1.25rem;
    margin: 1em auto;

    &.no-margin {
      margin-top: 0;
    }
  }
`;

async function fetchExistingCourse(apiEndpoint) {
  try {
    const courses = await api.get(`${apiEndpoint}/listar`);
    if (courses.data.cursos.length) {
      return courses.data.cursos[0];
    }
    throw new Error("Não há cursos disponíveis.");
  } catch (e) {
    console.error(e.message);
    throw e;
  }
}

async function postCourseSubscription(data) {
  try {
    const subscription = await api.post(
      `${data.apiEndpoint}/inscricoes/nova`,
      data.formData
    );
    return subscription.data.inscricao;
  } catch (e) {
    console.error(e.response.data.error);
    throw new Error(
      e.response.data.error ||
        "Houve uma falha inesperada e sua inscrição não foi realizada. Entre em contato conosco caso o problema volte a acontecer."
    );
  }
}

export default function Curso(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const { curso } = props;
  const {
    isLoading,
    isError,
    data: openClass,
  } = useQuery(curso.link, () => fetchExistingCourse(curso.link), {
    retry: false,
  });
  const mutation = useMutation((data) => postCourseSubscription(data));

  async function handleSubmitSubscription(e, apiEndpoint, { _id }) {
    e.preventDefault();
    setLoading(true);
    const genderSelect = e.target.formGender[0]?.selectedOptions[0].value;
    const genderValue = e.target.formGender[1]?.value;
    let pronomes = [];
    e.target.formPronoums.forEach((c) => {
      if (c.checked) {
        pronomes.push(c.getAttribute("data-value"));
      }
    });
    const formData = {
      course_id: _id,
      name: e.target.formName.value.trim(),
      email: e.target.formEmail.value.trim(),
      phone: e.target.formPhone.value.trim(),
      gender:
        genderSelect === "Selecione sua identidade de gênero"
          ? genderValue
          : genderSelect,
      pronoums: pronomes.join(", "),
      cep: e.target.formCep.value.trim(),
      address: e.target.formAddress.value.trim(),
      number: e.target.formNumber.value.trim(),
      city: e.target.formCity.value.trim(),
      neighborhood: e.target.formNeighborhood.value.trim(),
    };
    mutation.mutate({ apiEndpoint, formData });
    setShowAlert(true);
    setLoading(false);
    document
      .getElementById("success-alert")
      ?.scrollIntoView({ behavior: "smooth" });
    document
      .getElementById("error-alert")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {props.children}
      <InstrucoesConteiner>
        {isLoading && <p>Verificando turmas abertas...</p>}
        {isError && (
          <Alert variant={"info"}>
            Não há turmas disponíveis no momento. Fique antenade nas nossas{" "}
            <Link to="/">redes sociais</Link> para futuros comunicados sobre a
            abertura de novas turmas para esse curso!
          </Alert>
        )}
        {openClass && (
          <>
            <p className="no-margin">
              <span className="ml-4">Caso</span> você tenha interesse no curso{" "}
              <strong>{curso.name}</strong>, você poderá se inscrever utilizando
              o formulário abaixo.
              <br />
              <br />
              <span className="ml-4">Ainda</span> tem alguma dúvida? Entre em
              contato conosco por meio dos nossos{" "}
              <Link to="/">canais de comunicação</Link>!
            </p>
            {mutation.isLoading && <Loading />}
            {showAlert && mutation.isError && (
              <Alert
                id="error-alert"
                variant={"danger"}
                onClose={() => setShowAlert(null)}
                dismissible
              >
                {mutation.error.message}
              </Alert>
            )}
            {showAlert && mutation.isSuccess && (
              <Alert
                id="success-alert"
                variant={"success"}
                onClose={() => setShowAlert(null)}
                dismissible
              >
                Inscrição realizada com sucesso! Você receberá um email com
                demais instruções em breve. Axé!
              </Alert>
            )}
            <FormInscricao
              handleSubmit={(e) =>
                handleSubmitSubscription(e, curso.link, openClass)
              }
              loading={loading}
            />
          </>
        )}
      </InstrucoesConteiner>
    </>
  );
}
