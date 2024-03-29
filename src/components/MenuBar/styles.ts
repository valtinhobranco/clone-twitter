import styled, {css} from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  Person,
  FavoriteBorder,
  Rocketseat,
  ExitToApp
} from '../../styles/Icons'


//  *................. CONTAINER .................

export const Container = styled.div`
  display: none;

  @media (min-width:500px){
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;

  padding:9px 19px 20px;

  max-height:100vh;

  overflow-y:scroll;

  

  ::-webkit-scrollbar{
  
   background-color: var(--primary);
 }


  }
  

`;


//  *................. CONTAINER INNER.................


export const TopSide = styled.div`
 display: flex;
  flex-direction: column;

  align-items: center;

  @media (min-width: 1280px){
    align-items: flex-start;


  }

`;



export const Logo = styled(Rocketseat)`
width: 41px;
height: 41px;

> path{

fill:var(--twitter);
}

margin-bottom:20px;

`;



export const MenuButton = styled.button`
  display:flex;
  align-items: center;
  flex-shrink: 0;

  >span {
    display: none;
  }

  @media (min-width: 1280px){
      >span {
      display: inline;
     margin-left: 19px;
  
     font-weight: bold;
     font-size: 19px;
    }     

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
  margin-top:16.5px;

  }

  & + button:last-child{
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span{
      display: none;
    }

    @media (min-width: 1280px){
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      > span{
        display: flex;

        
    }

    }
  }

 cursor:pointer;
 border-radius:25px;

 &:hover{
   background: var(--twitter-dark-hover);
 }

 &:hover, &.active{
   background: var(--twitter-dark-hover);

   span, svg {
     color: var(--twitter);
     fill: var(--twitter);
   }
 }

`;


//  *................. ICONS .................

const iconCss = css`
flex-shrink: 0;

width:30px;
height:30px;

color:var(--white);

 
`;


export const HomeIcon = styled(Home)`
${iconCss};
`;



export const BellIcon = styled(Notifications)`
${iconCss};
`;



export const EmailIcon = styled(Email)`
${iconCss};
`;



export const FavoriteIcon = styled(FavoriteBorder)`
${iconCss};
`;



export const ProfileIcon = styled(Person)`
${iconCss};
`;

export const BottomSide = styled.div`
   margin-top: 20px;
   display: flex;
   align-items: center;
`;


export const Avatar = styled.div`
width: 40px;
height: 40px;

flex-shrink: 0;
background: var(--gray);
border-radius:50%;


`;


export const ProfileData = styled.div`


display: none;

@media (min-width:1280px){

 display: flex;
 flex-direction: column;
 margin: 0 0px 0 10px;

 font-size: 14px;

 > span {
  color: var(--gray)
 }
}




`;


export const ExitIcon = styled(ExitToApp)`
      display: none;

      @media (min-width:1280px){
        display: inline-flex;
        flex-shrink: 0;
        width:25px;
        height:25px;
        margin-left: 30px;
        color:var(--white);
        cursor:pointer;

         &:hover{
           > path {
             color: var(--like);
          }
         }
      }

`;


