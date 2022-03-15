import * as S from './pagination.styled';
import { Select } from '../../components';

const selectName = 'hotels-count';

const selectOptions = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
];

function Pagination(): JSX.Element {
  return (
    <S.Pagination>
      <S.PaginationWrapper>
        <S.PageButton to="#" isCurrent>1</S.PageButton>
        <S.PageButton to="#">2</S.PageButton>
        <S.PageButton to="#">3</S.PageButton>
        <S.PageButton to="#">4</S.PageButton>
        <S.PageButton to="#" >...</S.PageButton>
        <S.PageButton to="#">10</S.PageButton>
      </S.PaginationWrapper>
      <S.SelectWrapper>
        <S.SelectLabel>
          Гостиниц на странице:
        </S.SelectLabel>
        <Select
          selectName={selectName}
          options={selectOptions} />
      </S.SelectWrapper>
    </S.Pagination>
  );
}

export default Pagination;
