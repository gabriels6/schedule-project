import styled from 'styled-components';

export const Main = styled.div`
    font-family:'${(props) => props.theme.fonts.title}';
    font-size:${(props) => props.theme.font_sizes.title};
    min-height:40px;
    margin-top:30px;
    margin-left:15px;
`;