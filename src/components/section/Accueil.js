import styled from "styled-components";
import LightPic from "picture/accueil/mobile-back-light.jpg";
import DarkPic from "picture/accueil/mobile-back-dark.jpg";
import gsap from "gsap";
import React, {useState} from 'react';


export default function Accueil({isColored}) {

    gsap.set('.animationH1', { opacity: 0 });
    setTimeout(() => {
        window.open.tween = gsap.fromTo('.animationH1', {
                x: 400
            },
            {
                x: 20,
                duration: 2,
                delay: 1,
                scrollTrigger: '.animationH1',
                opacity: 1,
                ease: 'power2.out'
            }
        );
    }, 1);
    gsap.set('.animationH2', { opacity: 0 });
    setTimeout(() => {
        window.open.tween = gsap.fromTo('.animationH2', {
            },
            {
                duration: 3,
                delay: 2.5,
                scrollTrigger: '.animtationH2',
                opacity: 1,
                // eslint-disable-next-line no-restricted-globals
                webkitFilter:"blur( 0px)"            }
        );
    }, 5);


    return (
        <AccueilTemplate className="styleBack" style={{
            /*
            backgroundImage: `url(${(props) => props.theme.pictureAccueil})`
            backgroundImage: isColored ? `url(${DarkPic})` : `url(${LightPic}`
            backgroundImage: `url(${(props) => props.theme.pictureAccueil})`
             */
        }}
        >
            <ExplainContent>
                <h1 className="animationH1" >Developpeur</h1>
                <h2 className="animationH2">Dessauw <br/> Hugo</h2>
            </ExplainContent>
        </AccueilTemplate>
    );


}

const ExplainContent= styled.div`
  position: absolute;
  top: 10%;
  left:5%;
  width: 100%;
  h1 {
    font-weight: bolder;
    text-transform: uppercase;
    position: absolute;
    opacity: 0;
    text-align: end;
    font-family: 'Montserrat', sans-serif;
  }
  h2 {
    position: absolute;
    font-weight: bold;
    top: 80px;
    text-transform: uppercase;
    opacity: 0;
    text-align: end;
    margin: auto;
    width: auto;
    color: ${(props) => props.theme.boxShadow};
    filter: blur(4px);
    font-family: 'Lora', serif;
    -webkit-text-stroke: 1px ${(props) => props.theme.boxShadow}; /* width and color */
  }
`;
const AccueilTemplate = styled.div`
  width: 100%;
  margin: auto;
  height: 680px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  clear: both;
  overflow-x: hidden;
  position: relative;
  background-image: url(${LightPic});
  @media (min-width: 550px) {
    height: 680px;
    background-position: center bottom  15% ;

  }
  @media (min-width: 650px) {
    height: 680px;
    background-position: center bottom  20% ;

  }
  @media (min-width: 900px) {
    height: 850px;
    background-position: center bottom  30% ;
  }
  @media (min-width: 1300px) {
    height: 1300px;
  }
  @media (min-width: 1450px) {
    height: 1300px;
  }

  h1 {
    right: 15%;
    font-size: 45px;

    @media (min-width: 650px) {
      font-size: 55px;
      right: 14%;

    }
    @media (min-width: 900px) {
      font-size: 65px;
      right: 12%;

    }
    @media (min-width: 1300px) {
      font-size: 80px;
      right: 10%;

    }
  }
  h2 {
    right: 11%;
    font-size: 45px;

    @media (min-width: 650px) {
      font-size: 50px;
      right: 11%;

    }
    @media (min-width: 900px) {
      font-size: 65px;
      right: 10%;

    }
    @media (min-width: 1300px) {
      font-size: 75px;
      right: 8.5%;

    }
    @media (min-width: 1500px) {
      font-size: 80px;
      margin-top: 3%;
      right: 9%;

    }
  }
`;


