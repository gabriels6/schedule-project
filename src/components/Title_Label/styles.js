import styled from 'styled-components';

export const Main = styled.p`
    font-family:'${(props) => props.theme.fonts.title}';
    font-size:${(props) => props.theme.font_sizes.title};
    margin-left:15px;
    width:60%;
`;