import styled from 'styled-components';

export const Main = styled.div`
    width:300px;
    height:50px;
    display:flex;
    align-items:center;
    margin: 15px;
`;

export const Color_Div = styled.div`
    background:${(props) => props.color};
    width:30px;
    height:30px;
    margin-right:10px;
`;