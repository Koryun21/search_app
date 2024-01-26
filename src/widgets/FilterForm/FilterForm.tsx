import React from 'react';
import { ButtonWrapper, Wrapper } from './FilterForm.styled';
import Label from '../../shared/ui/Label';
import Select from '../../shared/ui/Select';
import Button from '../../shared/ui/Button';
import AgeRange from '../../features/AgeRange';

const FilterForm:React.FC = () => {
  return (
    <Wrapper>
      <Label label='Я ищу психолога'>
        <Select options={[]}/>
      </Label>
      <Label label='В возрасте'>
        <AgeRange/>
      </Label>
      <Label label='Тема'>
        <Select options={[]}/>
      </Label>
      <Label label='Квалификация'>
        <Select options={[]}/>
      </Label>
      <Label label='Рейтинг'>
        <Select options={[]}/>
      </Label>
      <ButtonWrapper>
        <Button label='Показать анкеты'/>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default FilterForm;