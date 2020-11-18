import styled from 'styled-components';

export const Main = styled.div`
    border:solid 2px ${(props) => props.theme.colors.primary};
    width:360px;
    height:350px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;