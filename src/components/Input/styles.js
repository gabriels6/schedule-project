import styled from 'styled-components';

export const Main = styled.input`
    margin: 25px 15px;
    padding: 5px 10px;

    ${(props) => props.type === 'date' && 'width:150px;'}
    ${(props) => props.type === 'text' && 'width:304px'};

    
    font-family:'${(props) => props.theme.fonts.regular}';
    font-size:${(props) => props.theme.font_sizes.text};
    background:none;
    border: solid 1px ${(props) => props.theme.colors.secondary};

    ::placeholder{
        font-family:'${(props) => props.theme.fonts.regular}';
    font-size:${(props) => props.theme.font_sizes.text};
    }

    
`;