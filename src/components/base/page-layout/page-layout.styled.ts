import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: calc(100 * var(--vh, 1vh));
  overflow: hidden;
`;
