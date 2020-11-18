import styled from 'styled-components';

export const Main = styled.div`
    height:88px;
    width:52%;
    background:${(props) => props.theme.colors.primary};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);



    border-left:solid 15px ${(props) => props.color};



    font-family:'${(props) => props.theme.fonts.regular}';
    padding-bottom:35px;
    margin: 25px 15px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    padding-right:30px;
    line-height:5px;
`;