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
import { demoCase, qualification, sex } from './FilterForm.constants';
import { useGetAllThemesQuery } from "../../entities/theme/model/themeApi";
import {
  generatedAgeRange,
  generatedRatingRange,
} from "../../shared/lib/generateRange";
import { FilterFormFields } from "./FilterForm.types";
import { schemaFilterForm } from './FilterForm.validation';
import { useSearchParams } from 'react-router-dom';

type FormData = yup.InferType<typeof schemaFilterForm>;

const FilterForm: React.FC = () => {
  const { data: themeData, isLoading } = useGetAllThemesQuery();
  const [_, setSearchParams] = useSearchParams();

  const { control, handleSubmit, formState:{errors} } = useForm<FormData>({
    defaultValues:{
      [FilterFormFields.AGE_FROM]: generatedAgeRange[0],
      [FilterFormFields.AGE_TO]: generatedAgeRange[generatedAgeRange.length -1],
      [FilterFormFields.RATING_FROM]: generatedRatingRange[0],
      [FilterFormFields.RATING_TO]: generatedRatingRange[generatedRatingRange.length -1],
      [FilterFormFields.SEX]:sex[0],
      [FilterFormFields.SUBJECT]:null,
      [FilterFormFields.PROF_SPECIALITY]:null
    },
    resolver: yupResolver(schemaFilterForm)
  });


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
      <Label label="В возрасте">
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
      <Label label="Рейтинг">
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
