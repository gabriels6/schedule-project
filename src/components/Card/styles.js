import styled from 'styled-components';

export const Main = styled.div`
    width:52%;
    min-height:44px;
    box-sizing:border-box;
    padding: 10px 25px;
    margin: 20px 0;
    background:${(props) => props.theme.colors.primary};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;