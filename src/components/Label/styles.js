import styled from 'styled-components';

export const Main = styled.div`
    font-family:'${(props) => props.theme.fonts.regular}';
    font-size:${(props) => props.theme.font_sizes.text};
    margin-left:15px;
    min-height: 40px;
    max-width:60%;
    line-height:20px;
    margin-bottom:10px;
    margin-top:10px;
`;