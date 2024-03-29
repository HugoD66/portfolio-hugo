import React from "react";
import ProgressLine from "./ProgressLine";
import styled from "styled-components";
import html from "picture/competences/html.png";
import css from "picture/competences/sass.png"
import php from "picture/competences/php.png"
import js from "picture/competences/js.png"
import sql from "picture/competences/sql.png"
import adobe  from "picture/competences/adobe.png"
import api from "picture/competences/api.png"

function CompTechnique(props) {

    return (
        <>
        <Progress>
            <ProgressLine
                label="HTML"
                picture={html}
                visualParts={[
                    {
                        percentage: "90%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="CSS/SCSS"
                picture={css}
                visualParts={[
                    {
                        percentage: "70%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="PHP"
                picture={php}
                visualParts={[
                    {
                        percentage: "70%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="JavaScript"
                picture={js}
                visualParts={[
                    {
                        percentage: "60%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="MySQL"
                picture={sql}
                visualParts={[
                    {
                        percentage: "75%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="Adobe XD"
                picture={adobe}
                visualParts={[
                    {
                        percentage: "55%",
                        color: "tan"
                    }
                ]}
            />
            <ProgressLine
                label="API Rest"
                picture={api}
                visualParts={[
                    {
                        percentage: "50%",
                        color: "tan"
                    }
                ]}
            />
        </Progress>
        <Complements>
            <div className="title1">
                <h5>IDE:</h5>
                <p> PhpStorm </p>
            </div>
            <div className="title2">
                <h5>Système d'exploitation:</h5>
                <p>Windows</p>
            </div>
        </Complements>
        </>
    );
}
const Progress = styled.div`
  width: 90%;
  margin: auto;
`;
const Complements = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h5 {
    color: ${(props) => props.theme.fontCompGenerale};
    font-family: Consolas,SansSerif,serif;
    font-size: 1.4em;
    margin: 2% auto;
    text-decoration: underline 2px solid ${(props) => props.theme.backSession};
    @media (min-width: 1500px) {
      margin: auto 2%;
      font-size: 2em;
    }
  }
  p {
    @media (min-width: 1500px) {
      font-size: 1.3em;
      margin: 1%;
    }
  }
`;
export default CompTechnique;
