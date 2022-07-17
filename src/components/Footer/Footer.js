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
                className="btn btn-outline-light btn-floating m-1 instagram"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/p137ru590/?hl=it"
                role="button" 
                rel="noreferrer"
                target="_blank"
               
              >
                <MDBIcon fab icon="instagram" />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 linkedin"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/in/pierosabino/"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 github"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/pierre1590"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </a>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © {year} Copyright:
            <a className="text-white" href="mailto:piero.sa@icloud.com"
              style={{marginLeft:5,textDecoration:'none'}}
            >
              Piero Sabino
            </a>
          </div>
        </MDBFooter>
      </>
    );
}




    
 