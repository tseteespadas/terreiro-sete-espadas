import { useCallback, useState } from "react";
import styled from "styled-components";
import { addAssistencia, fetchAssistenciaByName } from "../../../api/giras";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import CustomSelect from "../select/Select";
import SearchInput from "./SearchInput";
import MultiSelect from "../select/MultiSelect";
import { pronoums } from "../../../data/pronoums";

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
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pronoums: [],
    preferred: false,
  });

  const handleSelect = (value) => {
    if (value === "") {
      return;
    }
    const { name, phone, pronoums, preferred } = searchResult.find(
      (p) => p.id === value
    );
    setForm({
      name,
      phone,
      pronoums,
      preferred,
    });
  };

  const handleSearch = async (query) => {
    try {
      if (query === "") {
        setSearchResult([]);
        return;
      }
      const data = await fetchAssistenciaByName(query, token);
      setSearchResult(data);
    } catch (err) {
      console.error("Erro ao buscar pessoas", err);
      toast.error("Erro ao buscar pessoas.");
    }
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      handleSearch(query);
    }, 500),
    [] // Garante que o debounce não seja recriado em cada render
  );

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleChange = (eOrArray) => {
    if (Array.isArray(eOrArray)) {
      setForm((prev) => ({
        ...prev,
        pronoums: eOrArray,
      }));
    } else {
      const { name, value, type, checked } = eOrArray.target;
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      pronoums: form.pronoums.join(" | "),
    };

    try {
      setLoading(true);
      await addAssistencia(giraId, payload, token);
      toast.success("Pessoa adicionada!");
      setForm({ name: "", phone: "", pronoums: [], preferred: false });
      setSearchTerm("");
      setSearchResult([]);
      onAdd();
    } catch (err) {
      toast.error("Erro ao adicionar pessoa.");
    } finally {
      setLoading(false);
    }
  };

  const selectData = searchResult.map((pessoa) => {
    return { value: pessoa.id, label: pessoa.name };
  });

  return (
    <>
      <AssistenciaSearch
        handleSelect={handleSelect}
        onSearchChange={onSearchChange}
        searchTerm={searchTerm}
        selectData={selectData}
      />
      <AssistenciaFormWrapper>
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
          <MultiSelect
            data={pronoums.map((pronoum) => ({
              value: pronoum,
              label: pronoum,
            }))}
            selectedValues={form.pronoums}
            onChange={handleChange}
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
          <Button type="submit" disabled={loading}>
            Adicionar
          </Button>
        </Form>
      </AssistenciaFormWrapper>
    </>
  );
};

const AssistenciaSearch = ({
  searchTerm,
  onSearchChange,
  selectData,
  handleSelect,
}) => (
  <AssistenciaSearchWrapper>
    <SearchInput
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Procure por nome"
    />
    <CustomSelect
      data={selectData}
      handleSelect={handleSelect}
      placeholder="Buscar pessoa"
    />
  </AssistenciaSearchWrapper>
);

const AssistenciaSearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
  margin-bottom: 1.5rem;
`;

const AssistenciaFormWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export default AssistenciaForm;
