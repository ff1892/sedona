import * as S from './features.styled';
import { useTheme } from 'styled-components';
import backgroundCity from '../../../assets/img/feature-background-1.jpg';
import backgroundNature from '../../../assets/img/feature-background-2.jpg';
import { ReactComponent as IconHouse } from '../../../assets/img/icons/icon-house.svg';
import { ReactComponent as IconBurger } from '../../../assets/img/icons/icon-burger.svg';
import { ReactComponent as IconSouvenir } from '../../../assets/img/icons/icon-souvenir.svg';

import { FeatureItem, Advantage, MainIntro } from '../../components';

function Features() {

  const theme = useTheme();
  return (
    <S.Features>
      <MainIntro />
      <FeatureItem
        background={theme.color.coolLight}
        textColor={theme.color.white}
        header='Настоящий городок'
        order='1'
        text={`Седона — не аттракцион  \n для туристов, там течёт \n своя жизнь`}
        imgSrc={backgroundCity}
        altText="Вид на городок Седона"
        imgPosition='right'
      />
      <Advantage
        background={theme.color.coolLight12}
        header='Жильё'
        text={`Рекомендуем пожить \n в настоящем мотеле, \n всё как в кино!`}
        icon={<IconHouse />} />
      <Advantage
        background={theme.color.white}
        header='Еда'
        text={`Всегда заказывайте \n топовый фирменный бургер, вы не разочаруетесь!`}
        icon={<IconBurger />} />
      <Advantage
        background={theme.color.coolLight12}
        header='Сувениры'
        text={`Не только китайского, \n но и настоящего местного производства!`}
        icon={<IconSouvenir />} />
      <FeatureItem
        background={theme.color.coolLight}
        textColor={theme.color.white}
        header={`Там есть \n мост дьявола`}
        order='2'
        text={`Да, по нему можно пройти! Если вы осмелитесь, разумеется`}
        imgSrc={backgroundNature}
        altText="Вид на каньон"
        imgPosition="left"
      />
      <FeatureItem
        background={theme.color.coolLight12}
        textColor={theme.color.black}
        header='Небольшая площадь'
        order='3'
        text='Все достопримечательности находятся очень близко'
      />
      <FeatureItem
        background={theme.color.coolLight20}
        textColor={theme.color.black}
        header='Красивая дорога'
        order='4'
        text='Ехать в Седону из Лас-Вегаса совсем не скучно!'
      />
      <FeatureItem
        background={theme.color.coolLight12}
        textColor={theme.color.black}
        header='Мало туристов'
        order='5'
        text='Большинство едет в Гранд Каньон и толпится там'
      />
    </S.Features>
  );
}

export default Features;
