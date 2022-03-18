import styled from 'styled-components';

const ViewToggler = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  display: flex;

  > div:not(:last-child) {
    margin-right: 8px;
  }
`;

const ViewLegend = styled.legend.attrs({
  className: "visually-hidden",
})``;

export {
  ViewToggler,
  ViewLegend,
};
