import styled from 'styled-components';

export const Main = styled.select`
    margin: 25px 15px;
    padding: 5px 10px;

    font-family:'${(props) => props.theme.fonts.regular}';
    font-size:${(props) => props.theme.font_sizes.text};
    background:none;
    border: solid 1px ${(props) => props.theme.colors.secondary};
    width:325px
`;