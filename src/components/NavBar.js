import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github.svg';
import { HashLink } from 'react-router-hash-link';
import { LanguageSelector } from "./LanguageSelector"
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar  expand="md" className={scrolled ? "scrolled" : "" }>
        <Container>
          <Navbar.Brand href="/" >
            <h1 >HQ</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Trang chủ</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Kỹ năng</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Các dự án đã làm</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/quoc-ha-97030523b/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/hhquoc"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/h.huy.quoc/"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/hhquoc89"><img src={navIcon4} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Liên hệ ngay!!</span></button>
              </HashLink>
              <LanguageSelector />
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
