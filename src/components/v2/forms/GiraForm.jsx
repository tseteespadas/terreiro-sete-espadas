import { useState } from "react";
import styled from "styled-components";
import { createGira } from "../../../api/giras";
import { toast } from "react-toastify";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #1d72b8;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const GiraForm = ({ onCreate, token }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createGira({ name, date }, token);
      toast.success("Gira criada com sucesso!");
      setName("");
      setDate("");
      onCreate();
    } catch (err) {
      toast.error("Erro ao criar gira.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome da gira"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Button type="submit">Criar Gira</Button>
    </Form>
  );
};

export default GiraForm;
