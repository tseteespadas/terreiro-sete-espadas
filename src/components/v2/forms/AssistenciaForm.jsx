import { useState } from "react";
import styled from "styled-components";
import { addAssistencia } from "../../../api/giras";
import { toast } from "react-toastify";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 1rem;
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 6px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AssistenciaForm = ({ giraId, onAdd, token }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pronoums: "",
    preferred: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAssistencia(giraId, form, token);
      toast.success("Pessoa adicionada!");
      setForm({ name: "", phone: "", pronoums: "", preferred: false });
      onAdd();
    } catch (err) {
      toast.error("Erro ao adicionar pessoa.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <Input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Telefone"
        required
      />
      <Input
        name="pronoums"
        value={form.pronoums}
        onChange={handleChange}
        placeholder="Pronomes"
        required
      />
      <CheckboxWrapper>
        <input
          type="checkbox"
          name="preferred"
          checked={form.preferred}
          onChange={handleChange}
        />
        Preferencial
      </CheckboxWrapper>
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default AssistenciaForm;
