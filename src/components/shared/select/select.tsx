import * as S from './select.styled';

type Option = {
  value: string,
  label: string,
};

type SelectProps = {
  selectName: string,
  options: Option[],
};


function Select({ selectName, options }: SelectProps) {
  return (
    <S.SelectWrapper>
      <S.Select name={selectName}>
        { options.map(({ value, label }) =>
          <S.Option value={value} key={value}>{label}</S.Option>) }
      </S.Select>
    </S.SelectWrapper>
  );
}

export default Select;
