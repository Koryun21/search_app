import { OptionType } from '../../../shared/ui/Select/Select.types';

export const findDefaultValue = (value:string | null,allOptions:OptionType[]) =>{
  const result = allOptions.find((currentOption) => currentOption.value.toString() === value)
  return  result??allOptions[0]
}