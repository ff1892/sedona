import * as S from './footer.styled';

function Footer(): JSX.Element {
  return (
    <S.Footer>
      <S.SocialsContainer>
        <S.SocialLink
          title="Седона в твиттере"
          href="https://www.twitter.com/htmlacademy_ru">
          <S.TwitterIcon />
        </S.SocialLink>
        <S.SocialLink
          title="Седона в фейсбуке"
          href="https://www.facebook.com/htmlacademy">
          <S.FacebookIcon />
        </S.SocialLink>
        <S.SocialLink
          title="Седона на ютубе"
          href="https://www.youtube.com/c/HTMLAcademyRUS">
          <S.YoutubeIcon />
        </S.SocialLink>
      </S.SocialsContainer>
      <S.Phone
        title="Контактный телефон"
        href="tel:+78128121212">
        +7 (812) 812-12-12
      </S.Phone>
      <S.LogoLink
        href="https://www.htmlacademy.ru/"
        target="_blank"
        aria-label="Сайт HTML Academy">
        <S.Logo />
      </S.LogoLink>
    </S.Footer>
  );
}

export default Footer;
