import styled from 'styled-components'

export const ContactListWrap = styled.ul`
  padding:10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  width:100%;

`;
export const ListItem = styled.li`
  margin-bottom:8px;
  width: calc((100% - 24px) / 3);
  height: 100%;
`;