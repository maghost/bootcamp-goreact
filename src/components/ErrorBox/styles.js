import styled from 'styled-components';

export const Container = styled.div`
  height: 42px;
  line-height: 42px;
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.6);
  background-color: #f55a5a;
  margin: 20px 0 10px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background-color: transparent;
    opacity: 0.5;
    padding: 5px;

    img {
      height: 14px;
    }
  }
`;
