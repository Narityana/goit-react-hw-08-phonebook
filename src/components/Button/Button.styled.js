import styled from 'styled-components';
export const ButtonStyled = styled.button`
  width: 160px;
  height: 40px;
  font-size: 16px;
  padding: 3px 12px;
  line-height: 1.5;
  color: #00838f;
  background-color: inherit;
  border: 1px solid;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(245, 244, 154, 0.5);
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
    background-color: #0097a7;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 131, 143, 0.5);
  }
`;

export const ButtonLogOut = styled(ButtonStyled)`
  color: white;
  &:hover {
    color: #00838f;
    background-color: rgba(245, 244, 154, 1);
  }
`;

export const ButtonAddCont = styled(ButtonStyled)`
  width: 120px;
  height: 30px;
  &:hover {
    color: #00838f;
    background-color: rgba(245, 244, 154, 1);
  }
`;
