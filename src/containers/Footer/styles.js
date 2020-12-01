import styled from 'styled-components';

export const Main = styled.div`
    width:100%;
    height:50px;
    box-sizing:border-box;
    padding:10px;
    color:${(props) => props.theme.colors.primary};
    background:${(props) => props.theme.colors.secondary};
    position:fixed;
    bottom:0;
    display:flex;
    justify-content:space-between;
    align-items:center;

    i{
        margin:5px;
    }

    a{
        color:${(props) => props.theme.colors.primary};
        transition:all .5s;
    }

    a:hover{
        color:grey;
        transition:all .5s;
    }
`; 