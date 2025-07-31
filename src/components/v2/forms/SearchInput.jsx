import styled from "styled-components";
import { FiSearch } from "react-icons/fi"; // Ícone de lupa

function SearchInput({ value, onChange, placeholder = "Buscar..." }) {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px 10px 38px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  color: #333;

  &:focus {
    border-color: #007bff;
  }
`;

const Icon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
`;

export default SearchInput;
