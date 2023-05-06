import styled from 'styled-components';

export const Container = styled.div` 
    margin-top:50px;
    padding: 80px 60px;
    background:rgba(44, 75, 68,1);
    position:absolute;
    bottom:0px;
    width:calc(100% - 120px);
`
export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
    margin-left:60px;
`

export const Row = styled.div`
    display:grid;
    grid-gap:20px;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    @media (max-width:1000px){
        grid-template-columns: repeat(2, 50%);
    }
    @media (max-width:600px){
        grid-template-columns: repeat(1, 230px);
    }
`

export const Link = styled.a`
    color:#fff;
    margin-bottom:20px;
    font-size:20px;
    text-decoration:none;
    cursor:pointer;
    &:hover {
        color: #00b78b;
        transition:200ms ease-in;
    }
    @media (max-width:1000px){
        font-size:18px;
    }
    @media (max-width:600px){
        font-size:16px;
    }
`

export const Title = styled.p`
    font-size:24px;
    color:#fff;
    margin-bottom:40px;
    font-weight:bold;
`