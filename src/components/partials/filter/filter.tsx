import * as S from './filter.styled';

import {
  FilterPrice,
  Checkbox,
  Radio,
} from '../../components';

function Filter(): JSX.Element {
  const checkboxName = 'infrastructure';
  const radioName = 'property-type';

  return (
    <S.Filter>
      <S.Fieldset>
        <S.Legend>Инфраструктура:</S.Legend>
        <Checkbox
          inputName={checkboxName}
          inputValue="бассейн"
          inputId="checkbox-pool"
          labelName="Бассейн"
          isChecked
        />
        <Checkbox
          inputName={checkboxName}
          inputValue="парковка"
          inputId="checkbox-parking"
          labelName="Парковка"
          isChecked
        />
        <Checkbox
          inputName={checkboxName}
          inputValue="wi-fi"
          inputId="checkbox-wifi"
          labelName="Wi-Fi"
        />
      </S.Fieldset>
      <S.Fieldset>
        <S.Legend>Тип жилья:</S.Legend>
        <Radio
          inputName={radioName}
          inputValue="гостиница"
          inputId="radio-hotel"
          labelName="Гостиница"
          isChecked
        />
        <Radio
          inputName={radioName}
          inputValue="мотель"
          inputId="radio-motel"
          labelName="Мотель"
        />
        <Radio
          inputName={radioName}
          inputValue="апартаменты"
          inputId="radio-apartments"
          labelName="Апартаменты"
        />
      </S.Fieldset>
      <S.Fieldset>
        <S.Legend>Стоимость, ₽:</S.Legend>
          <FilterPrice
            minInputId="minPrice"
            minLabelName="от"
            minCurrent={0}
            min={0}
            maxInputId="maxPrice"
            maxLabelName="до"
            maxCurrent={9000}
            max={12000}
          />
      </S.Fieldset>
      <S.ButtonWrapper>
        <S.SubmitButton as="input" value="Применить" />
        <S.ResetButton value="Сбросить"/>
      </S.ButtonWrapper>
    </S.Filter>
  );
}

export default Filter;
