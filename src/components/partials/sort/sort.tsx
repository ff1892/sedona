import * as S from './sort.styled';
import { Select, ViewToggler } from '../../components';

const selectName = 'sort-order';

const selectOptions = [
  { value: 'price-down', label: 'Сначала дешевые' },
  { value: 'popularity-down', label: 'Сначала популярные' },
];

function Sort(): JSX.Element {
  return (
    <S.Sort>
      <S.SortTitle>Найдено гостиниц: 38</S.SortTitle>
      <S.SortForm>
        <Select
          selectName={selectName}
          options={selectOptions} />
        <ViewToggler />
      </S.SortForm>
    </S.Sort>
  );
}

export default Sort;
