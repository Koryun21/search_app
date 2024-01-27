import { OptionType } from '@src/shared/ui';

export const demoCase: OptionType = {
  id:'0',
  label:'Не важен',
  value:0,
  isDemo:true
}
export const sex:OptionType[]= [
  {
    id:0,
    label: 'Любого пола',
    value: 0,
    isDemo: true
  },
  {
    id:1,
    label: 'Мужской',
    value: 1
  },
  {
    id:2,
    label: 'Женский',
    value: 2
  }
]

export const qualification:OptionType[] = [
  demoCase,
  {
    id:1,
    label: 'Консультант',
    value: 1
  },
  {
    id:2,
    label: 'Сексолог',
    value: 2
  },
  {
    id:3,
    label: 'Коуч',
    value: 3
  }
]