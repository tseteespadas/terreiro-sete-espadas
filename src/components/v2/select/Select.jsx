import styled from "styled-components";

function CustomSelect({ data, handleSelect, placeholder = "Selecione..." }) {
  const renderOption = (option) => {
    if (typeof option === "string") {
      return (
        <StyledOption key={option} value={option}>
          {option}
        </StyledOption>
      );
    }

    return (
      <StyledOption key={option.value} value={option.value}>
        {option.label}
      </StyledOption>
    );
  };

  const onChange = (e) => {
    handleSelect(e.target.value);
  };

  return (
    <StyledSelect onChange={onChange} defaultValue="">
      <StyledOption value="" disabled hidden>
        {placeholder}
      </StyledOption>
      {data.map(renderOption)}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  font-size: 1rem;
  color: #333;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const StyledOption = styled.option`
  color: #333;
  background-color: #fff;
`;

export default CustomSelect;
