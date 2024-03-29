import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg11 from "../assets/img/11.png";
import projImg21 from "../assets/img/21.png";
import projImg31 from "../assets/img/31.png";
import projImg41 from "../assets/img/41.png";
import projImg51 from "../assets/img/51.png";
import projImg61 from "../assets/img/61.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "E-commerce",
      description: "Home",
      imgUrl: projImg1,
    },
    {
      title: "E-commerce",
      description: "List product",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce",
      description: "Login",
      imgUrl: projImg3,
    },
    {
      title: "E-commerce",
      description: "Product details",
      imgUrl: projImg4,
    },
    {
      title: "E-commerce",
      description: "Cart",
      imgUrl: projImg5,
    },
    {
      title: "E-commerce",
      description: "Register",
      imgUrl: projImg6,
    },
  ];
  const projects2 = [
    {
      title: "Review film",
      description: "Splash",
      imgUrl: projImg11,
    },
    {
      title: "Review film",
      description: "Home",
      imgUrl: projImg21,
    },
    {
      title: "Review film",
      description: "Login",
      imgUrl: projImg31,
    },
    {
      title: "Review film",
      description: "Actor information",
      imgUrl: projImg41,
    },
    {
      title: "Review film",
      description: "Search films",
      imgUrl: projImg51,
    },
    {
      title: "Review film",
      description: "Film detail",
      imgUrl: projImg61,
    },
  ];
  const projects3 = [
    {
      title: "Quản lý nhà hàng",
      description: "Splash",
      imgUrl: projImg11,
    },
    {
      title: "Quản lý nhà hàng",
      description: "Trang chủ",
      imgUrl: projImg21,
    },
    {
      title: "Quản lý nhà hàng",
      description: "Đăng nhập",
      imgUrl: projImg31,
    },
    {
      title: "Quản lý nhà hàng",
      description: "Chi tiết diễn viên",
      imgUrl: projImg41,
    },
    {
      title: "Quản lý nhà hàng",
      description: "Tìm kiếm phim",
      imgUrl: projImg51,
    },
    {
      title: "Quản lý nhà hàng",
      description: "Chi tiết bộ phim",
      imgUrl: projImg61,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Pet Project</h2>
                  <p>Includes small projects I worked on during my coding</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">E-commerce</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Ứng dụng Review film
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Ứng dụng ghi chú</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Đợi tí gần xong rồi :D</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
