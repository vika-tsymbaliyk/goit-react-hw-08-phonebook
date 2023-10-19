import styled from 'styled-components'

export const ContactListWrap = styled.ul`
  
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width:100%;

`;
export const ListItem = styled.li`
  margin-bottom:8px;
  width: calc((100% - 24px));
  height: 100%;
  @media ( ${({ theme }) => theme.media.tablet}) {
    width: calc((100% - 24px) / 2);
  };

  @media ( ${({ theme }) => theme.media.laptop}) {
    width: calc((100% - 24px) / 3);
  } 
`;