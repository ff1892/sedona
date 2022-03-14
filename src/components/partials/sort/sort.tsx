import * as S from './sort.styled';
import { Select } from '../../components';
import iconTile from '../../../assets/img/icons/icon-tile.svg';
import iconSlideshow from '../../../assets/img/icons/icon-slideshow.svg';
import iconList from '../../../assets/img/icons/icon-list.svg';

const selectName = 'sort-order';

const selectOptions = [
  { value: 'price-down', label: 'Сначала дешевые' },
  { value: 'popularity-down', label: 'Сначала популярные' },
];

function Sort(): JSX.Element {
  return (
    <S.Sort>
      <S.SortHeader>Найдено гостиниц: 38</S.SortHeader>
      <Select
        selectName={selectName}
        options={selectOptions} />
      <S.ButtonsWrapper>
        <S.SortButton icon={iconTile} title="Показать плиткой" />
        <S.SortButton icon={iconSlideshow} title="Показать слайдшоу" />
        <S.SortButton icon={iconList} isSelected title="Показать списком" />
      </S.ButtonsWrapper>
    </S.Sort>
  );
}

export default Sort;
