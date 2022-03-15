import * as S from './subscribe.styled';

type SubscribeProps = {
  hasBackground?: boolean;
};

function Subscribe({ hasBackground=false }: SubscribeProps) {
  return (
    <S.Subscribe hasBackground={hasBackground}>
      <S.SubscribeHeader>
        Подпишитесь на рассылку
      </S.SubscribeHeader>
      <S.SubscribeText>
        Только полезная информация и никакого спама, честное бойскаутское!
      </S.SubscribeText>
      <S.SubscribeForm>
          <S.SubscribeButton as="input" value="Подписаться" />
          <S.SubscribeInput placeholder="Ваш e-mail" isError={false}/>
      </S.SubscribeForm>
    </S.Subscribe>
  );
}

export default Subscribe;
