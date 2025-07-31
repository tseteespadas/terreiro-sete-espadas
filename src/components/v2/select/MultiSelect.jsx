import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiCheck } from "react-icons/fi";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

const SelectBox = styled.div`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background-color: #f1f1f1;
  }

  input {
    margin-right: 8px;
  }
`;

const SelectedValues = styled.span`
  color: #333;
  font-size: 0.95rem;
`;

function MultiSelect({
  data,
  selectedValues = [],
  onChange,
  placeholder = "Selecionar...",
}) {
  const [open, setOpen] = useState(false);

  const toggleValue = (value) => {
    const newSelected = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    onChange(newSelected);
  };

  const getLabel = () => {
    if (selectedValues.length === 0) return placeholder;
    const selectedLabels = data
      .filter((opt) => selectedValues.includes(opt.value))
      .map((opt) => opt.label);
    return selectedLabels.join(", ");
  };

  return (
    <Wrapper>
      <SelectBox onClick={() => setOpen(!open)}>
        <SelectedValues>{getLabel()}</SelectedValues>
        <FiChevronDown />
      </SelectBox>
      {open && (
        <Dropdown>
          {data.map((option) => (
            <Option key={option.value}>
              <input
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => toggleValue(option.value)}
              />
              {option.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
}

export default MultiSelect;
