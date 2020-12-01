import styled from 'styled-components';

export const Main = styled.button`
    margin-left: 15px;
    padding: 5px 10px;

    border:solid 3px ${(props) => props.theme.colors.secondary};
    border-radius:2px;

    background:${(props) => props.theme.colors.secondary};
    width:124px;
    color:white;
    font-family:${(props) => props.theme.fonts.title};
`;