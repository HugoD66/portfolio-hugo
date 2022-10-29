import styled from "styled-components";
import curiculum from "picture/curiculum.svg";
import phone from "picture/phone.svg";
import enveloppe from "picture/envelope.svg";
import ContactForm from "../UI/ContactForm";
import React, {useState} from 'react';
import Pdf from 'picture/CV.png';
import Modal from 'react-bootstrap/Modal';

export default function Contact() {

    const imageClick = (e) => {
        window.location = "tel:0662560152"

    }
    const imageMail = (e) => {
        window.location.href  = "mailto:dessauw.hugo@gmail.com"

    }

    const [showModalPdf, setShowModalPdf] = useState(false);
    const handleClosePdf = () => setShowModalPdf(false);
    const handleShowPdf = () => setShowModalPdf(true);


    return (
        <ContactTemplate>
            <Description>
                    Si vous souhaitez en savoir plus,
                    merci de remplir le formulaire
                    de contact. Mes coordonnées
                    sont également mises
                    à disposition.
                <div className="icones">
                    <img src={phone} alt="Tel"  onClick={() => imageClick()}/>
                    <img email="dessauw.hugo@gmail.com" src={enveloppe} alt="Enveloppe" onClick={(e) => imageMail}/>
                    <img src={curiculum} alt="CV" onClick={handleShowPdf} />
                </div>
            </Description>
            <ContactForm />
            <Modal className="modal" show={showModalPdf} onHide={handleClosePdf}>
                <Modal.Dialog >
                    <Modal.Header closeButton   className="border-0">
                        <Modal.Title>Mon CV</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Im src= {Pdf} alt="CV Hugo DESSAUW"/>
                    </Modal.Body>
                    <Modal.Footer   className="border-0">
                        <Btn variant="secondary" onClick={handleClosePdf}>Fermer</Btn>
                        <Btn variant="primary" ><a href={Pdf} download>Telecharger </a></Btn>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </ContactTemplate>


    );
}
const ContactTemplate = styled.div`
  margin-top: 5%;
`;
const Description= styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: large;
  text-align: justify;
  width: 90%;
  margin: 5% auto;
  color: ${(props) => props.theme.fontCompGenerale};
  .icones {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: auto;
    width: 100%;
    img {
      margin: 5% auto;
      padding: 9px;
      width: 7em;
      height: 7em;
      border: 2px solid ${(props) => props.theme.backSession};
      border-radius: 20px;
      -o-transition: background-color 0.4s ease-out;
      cursor: pointer;
      transition: all 0.6s ease-in-out;
      &:hover{
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
        background-color: ${(props) => props.theme.backSession};
        
      }
    }
  }
`;
const Im = styled.img`
  max-height: 100%;
  max-width: 80%;
`;
const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  text-decoration: none;
  font-family:  ${(props) => props.theme.fontTheme};
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
  margin-right: 2%;
  transition: all 0.6s ease-in-out;
  color:  inherit;

  &:hover {
    transform: scale(1.2);
    transition: all 0.6s ease-in-out;
  }
  a {
    text-decoration: none;
    color:  inherit;
  }

`;