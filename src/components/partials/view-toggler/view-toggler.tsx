import * as S from './view-toggler.styled';
import { RadioIcon } from '../../components';
import { ReactComponent as IconTile } from '../../../assets/img/icons/icon-tile.svg';
import { ReactComponent as IconSlideshow } from '../../../assets/img/icons/icon-slideshow.svg';
import { ReactComponent as IconList } from '../../../assets/img/icons/icon-list.svg';


function ViewToggler(): JSX.Element {
  const fieldsetName = 'mode-view';

  return(
    <S.ViewToggler>
      <S.ViewLegend>Изменить режим просмотра</S.ViewLegend>
      <RadioIcon
        inputName={fieldsetName}
        inputValue="Показать плиткой"
        inputId="tile"
        icon={<IconTile />}
      />
      <RadioIcon
        inputName={fieldsetName}
        inputValue="Показать слайдшоу"
        inputId="slideshow"
        icon={<IconSlideshow />}
      />
      <RadioIcon
        inputName={fieldsetName}
        inputValue="Показать списком"
        inputId="list"
        icon={<IconList />}
        isChecked
      />
    </S.ViewToggler>
  );
}

export default ViewToggler;
