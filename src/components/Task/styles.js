import styled from 'styled-components';

export const Main = styled.div`
    width:52%;
    min-height:88px;
    background:${(props) => props.theme.colors.primary};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    border-left:solid 15px ${(props) => props.color};

    font-family:'${(props) => props.theme.fonts.regular}';
    padding-bottom:35px;
    margin: 25px 15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-right:30px;
    padding-top:10px;
    line-height:5px;
`;