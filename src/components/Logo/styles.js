import styled from 'styled-components';

export const Main = styled.div`
    font-family:'${(props) => props.theme.fonts.title}';
    font-size:${(props) => props.theme.font_sizes.logo};
    border: solid 15px black;
    padding: 15px 45px;
    margin-bottom:20px;
`;