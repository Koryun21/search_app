import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  ButtonWrapper, ErrorText,
  Form,
  RangeSelect,
  SelectBlock,
} from './FilterForm.styled';
import Label from "../../shared/ui/Label";
import Select from "../../shared/ui/Select";
import Button from "../../shared/ui/Button";
import { demoCase, qualification, sex } from './config/FilterForm.constants';
import { useGetAllThemesQuery } from "../../entities/theme/model/themeApi";
import {
  generatedAgeRange,
  generatedRatingRange,
} from "../../shared/lib/generateRange";
import { FilterFormFields } from "./config/FilterForm.types";
import { schemaFilterForm } from './config/FilterForm.validation';
import { useSearchParams } from 'react-router-dom';
import { findDefaultValue } from './lib/findDefaultValue';

type FormData = yup.InferType<typeof schemaFilterForm>;

const FilterForm: React.FC = () => {
  const { data: themeData, isLoading } = useGetAllThemesQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const themes = useMemo(() => {
    if (isLoading || !themeData) {
      return [];
    }
    const normalizedThemData =  themeData.data.map((theme) => ({
      id: theme.id,
      label: theme.name,
      value: theme.id,
    }));
    return [demoCase, ...normalizedThemData]
  }, [themeData, isLoading]);

  const { control, handleSubmit, formState:{errors} } = useForm<FormData>({
    defaultValues:{
      [FilterFormFields.AGE_FROM]: findDefaultValue(searchParams.get(FilterFormFields.AGE_FROM),generatedAgeRange),
      [FilterFormFields.AGE_TO]: findDefaultValue(searchParams.get(FilterFormFields.AGE_TO),generatedAgeRange),
      [FilterFormFields.RATING_FROM]: findDefaultValue(searchParams.get(FilterFormFields.RATING_FROM),generatedRatingRange),
      [FilterFormFields.RATING_TO]: findDefaultValue(searchParams.get(FilterFormFields.RATING_TO),generatedRatingRange),
      [FilterFormFields.SEX]:findDefaultValue(searchParams.get(FilterFormFields.SEX),sex),
      [FilterFormFields.SUBJECT]:findDefaultValue(searchParams.get(FilterFormFields.SUBJECT),themes),
      [FilterFormFields.PROF_SPECIALITY]:findDefaultValue(searchParams.get(FilterFormFields.PROF_SPECIALITY),qualification)
    },
    resolver: yupResolver(schemaFilterForm)
  });




  const handleFormSubmit = (data:FormData) => {
    const reshapedData = Object.fromEntries(
      Object.entries(data).reduce<Array<[string,string]>>(
        (acc,[key,valueObj]) => {
          if(valueObj?.value === undefined || valueObj?.value === null || valueObj.isDemo){
            return acc
          }
          return[...acc,[key, valueObj.value.toString()]];
        },[])
    )
    setSearchParams(reshapedData)
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)} >
      <Label label="Я ищу психолога">
        <Controller
          control={control}
          name={FilterFormFields.SEX}
          render={({field:{onChange,value}}) => <Select options={sex} value={value} onChange={onChange} />}
        />
      </Label>
      <Label label="В возрасте" isInline>
        <RangeSelect>
          <SelectBlock>
            От
            <Controller
              control={control}
              name={FilterFormFields.AGE_FROM}
              rules={{}}
              render={({field:{onChange,value}}) => <Select options={generatedAgeRange} value={value} onChange={onChange} />}
            />
          </SelectBlock>
          <SelectBlock>
            До
            <Controller
              control={control}
              name={FilterFormFields.AGE_TO}
              render={({field:{onChange,value}}) => <Select options={generatedAgeRange} value={value} onChange={onChange} />}
            />
          </SelectBlock>
          {errors[FilterFormFields.AGE_TO] && <ErrorText>{errors[FilterFormFields.AGE_TO]?.message}</ErrorText>}
        </RangeSelect>
      </Label>
      <Label label="Тема">
        <Controller
          control={control}
          name={FilterFormFields.SUBJECT}
          render={({field:{onChange,value}}) => <Select options={themes} value={value} onChange={onChange}/>}
        />
      </Label>
      <Label label="Квалификация">
        <Controller
          control={control}
          name={FilterFormFields.PROF_SPECIALITY}
          render={({field:{onChange,value}}) => <Select options={qualification} value={value} onChange={onChange} />}
        />
      </Label>
      <Label label="Рейтинг" isInline>
        <RangeSelect>
          <SelectBlock>
            От
            <Controller
              control={control}
              name={FilterFormFields.RATING_FROM}
              render={({field:{onChange,value}}) => <Select options={generatedRatingRange} value={value} onChange={onChange}/>}
            />
          </SelectBlock>
          <SelectBlock>
            До
            <Controller
              control={control}
              name={FilterFormFields.RATING_TO}
              render={({field:{onChange,value}}) => <Select options={generatedRatingRange} value={value} onChange={onChange} />}
            />
          </SelectBlock>
          {errors[FilterFormFields.RATING_TO] && <ErrorText>{errors[FilterFormFields.RATING_TO]?.message}</ErrorText>}
        </RangeSelect>
      </Label>
      <ButtonWrapper>
        <Button label="Показать анкеты" type='submit'/>
      </ButtonWrapper>
    </Form>
  );
};

export default FilterForm;
