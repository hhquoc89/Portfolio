import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/github.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={8} sm={6}>
            <h1>HQ</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/quoc-ha-97030523b/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/hhquoc">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/h.huy.quoc/">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://github.com/hhquoc89">
                <img src={navIcon4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
