import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import "./Footer.css"

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
      <>
        <MDBFooter className="bg-dark text-center text-white">
          <MDBContainer className="p-4 pb-0">
            <section className="mb-4" >
            <a
                className="btn btn-outline-light btn-floating m-1 linkedin"
                href="https://www.linkedin.com/in/pierosabino/"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 instagram"
                href="https://www.instagram.com/piero_sabino1/"
                role="button" 
                rel="noreferrer"
                target="_blank"
              >
                <MDBIcon fab icon="instagram" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 github"
                href="https://github.com/pierre1590"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 heart-icon"
                href="https://www.buymeacoffee.com/pierosaB"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <MDBIcon fas icon="heart" />
              </a>
            </section>
          </MDBContainer>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)",marginBottom:5 }}
          >
            <a className="text-white" href="mailto:piero.sa@icloud.com"
              style={{marginLeft:5,textDecoration:'none'}}
            >
              Piero Sabino
            </a>
            {' '}
            &copy; {year} 
           <div>
             Created with  <MDBIcon icon="heart" className="heart" /> and <MDBIcon fab icon="react" size="2x" style={{color:'#0ff',marginLeft:5}}/>
           </div>
           <div>
              <a href="https://www.iubenda.com/privacy-policy/21039963" target="_blank" title="Privacy Policy" content="Privacy Policy" rel="noreferrer">Privacy Policy</a>
           </div>
          </div>
        </MDBFooter>
      </>
    );
}




    
 