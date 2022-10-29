import styled from "styled-components";
import DarkPic from "picture/accueil/accueil-dark.png";
import LightPic from "picture/accueil/accueil-light.png";
import Mobile from "picture/accueil/mobile-back.jpg";
import gsap from "gsap";
import React from 'react';


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
        <AccueilTemplate>
            <ExplainContent>
                <h1 className="animationH1" >Developpeur</h1>
                <h2 className="animationH2">Back-End</h2>
            </ExplainContent>
        </AccueilTemplate>
    );


}

const ExplainContent= styled.div`
  position: absolute;
  top: 10%;
  left:5%;
  h1 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 50px;
    position: absolute;
    color: black;
    opacity: 0;
    text-align: end;
    font-family: 'Montserrat', sans-serif;
  }
  h2 {
    position: absolute;
    font-weight: bold;
    top: 80px;
    text-transform: uppercase;
    font-size: 80px;
    opacity: 0;
    text-align: end;
    margin: auto;
    width: auto;
    left: 150px;
    filter: blur(4px);
    font-family: 'Lora', serif;
  }
`;
const AccueilTemplate = styled.div`
  width: 100%;
  margin: auto;
  height: 670px;
  background-image: url(${Mobile});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  clear: both;
  overflow-x: hidden;
  position: relative;
`;

    /*

  background-image: $lightTheme ? {DarkPic} : {LightPic};



    @if (lightTheme: true) {
  background-image: url(${DarkPic});
} @else {
  background-image: url(${LightPic});
}
     */

