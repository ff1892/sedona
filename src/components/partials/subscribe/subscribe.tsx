import * as S from './subscribe.style';

type SubscribeProps = {
  hasBackground: boolean;
};

function Subscribe({ hasBackground }: SubscribeProps) {
  return (
    <S.Subscribe hasBackground={hasBackground}>
      <S.SubscribeHeader>
        Подпишитесь на рассылку
      </S.SubscribeHeader>
      <S.SubscribeText>
        Только полезная информация и никакого спама,<br/> честное бойскаутское!
      </S.SubscribeText>
      <S.SubscribeForm>
        <S.SubscribeForm>
          <S.SubscribeButton as="input" value="Подписаться" />
          <S.SubscribeInput placeholder="Ваш e-mail" isError={false}/>
        </S.SubscribeForm>
      </S.SubscribeForm>
    </S.Subscribe>
  );
}

export default Subscribe;
