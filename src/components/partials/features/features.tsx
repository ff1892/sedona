import * as S from './features.styled';
import { useTheme } from 'styled-components';
import backgroundCity from '../../../assets/img/feature-background-1.jpg';
import backgroundNature from '../../../assets/img/feature-background-2.jpg';
import {ReactComponent as IconHouse} from '../../../assets/img/icons/icon-house.svg';
import {ReactComponent as IconBurger} from '../../../assets/img/icons/icon-burger.svg';
import {ReactComponent as IconSouvenir} from '../../../assets/img/icons/icon-souvenir.svg';

import { FeatureItem, Advantage, MainIntro } from '../../components';

function Features() {

  const theme = useTheme();
  return (
    <S.Features>
      <MainIntro />
      <FeatureItem
        background={theme.color.coolLight}
        color={theme.color.white}
        header='Настоящий городок'
        order='1'
        text='Седона — не аттракцион для туристов, там течёт своя жизнь'
      />
      <S.FeatureBackground image={backgroundCity} />
      <Advantage
        background={theme.color.coolLight12}
        header='Жильё'
        text='Рекомендуем пожить в настоящем мотеле, всё как в кино!'>
        <IconHouse />
      </Advantage>
      <Advantage
        background={theme.color.white}
        header='Еда'
        text='Всегда заказывайте топовый фирменный бургер, вы не разочаруетесь!'>
        <IconBurger />
      </Advantage>
      <Advantage
        background={theme.color.coolLight12}
        header='Сувениры'
        text='Не только китайского, но и настоящего местного производства!'>
        <IconSouvenir />
      </Advantage>
      <S.FeatureBackground image={backgroundNature} />
      <FeatureItem
        background={theme.color.coolLight}
        color={theme.color.white}
        header='Там есть мост дьявола'
        order='2'
        text='Да, по нему можно пройти! Если вы осмелитесь, разумеется'
      />
      <FeatureItem
        background={theme.color.coolLight12}
        color={theme.color.black}
        header='Небольшая площадь'
        order='3'
        text='Все достопримечательности находятся очень близко'
      />
      <FeatureItem
        background={theme.color.coolLight20}
        color={theme.color.black}
        header='Красивая дорога'
        order='4'
        text='Ехать в Седону из Лас-Вегаса совсем не скучно!'
      />
      <FeatureItem
        background={theme.color.coolLight12}
        color={theme.color.black}
        header='Мало туристов'
        order='5'
        text='Большинство едет в Гранд Каньон и толпится там'
      />
    </S.Features>
  );
}

export default Features;
