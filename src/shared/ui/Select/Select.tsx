import React, { useState } from "react";
import { OptionType } from "./Select.types";
import Icon from "../Icon";
import useOutlier from "../../hooks/useOutlier";
import {
  Wrapper,
  IconWrapper,
  OptionItem,
  OptionsList,
  SelectedValue,
} from "./Select.styled";

interface SelectProps {
  options: OptionType[];
  onChange?: (value: OptionType) => void;
  defaultValue?: OptionType;
  value?: OptionType;
}

const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  defaultValue,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const outRef = useOutlier<HTMLDivElement>(() => setIsOpen(false));

  const selectedValue = value || defaultValue || null;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: OptionType) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  return (
    <Wrapper ref={outRef} onClick={handleToggle}>
      <SelectedValue>
        {selectedValue !== null ? selectedValue.label : "Выберите вариант"}
        <IconWrapper $isOpen={isOpen}>
          <Icon name="arrowDown" />
        </IconWrapper>
      </SelectedValue>
      <OptionsList $isOpen={isOpen}>
        {options.map((option) => (
          <OptionItem key={option.id} onClick={() => handleOptionClick(option)}>
            {option.label}
          </OptionItem>
        ))}
      </OptionsList>
    </Wrapper>
  );
};

export default Select;
