import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // const projects = [
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  // ];

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
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
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
                          <ProjectCard
                            title="MERN Stack Blog"
                            description="Design & Development of a MERN Stack Blog"
                            imgUrl={projImg1}
                          />
                          <p>
                            <h3>MERN Stack Blog Application</h3>A blog
                            application built with the MERN (MongoDB, Express,
                            React, Node.js) stack is a powerful, full-stack web
                            application that combines modern front-end and
                            back-end technologies to deliver a seamless blogging
                            experience. The front end is crafted using React, a
                            JavaScript library known for its efficiency and
                            reusable components. React's integration with
                            Tailwind CSS enables the application to achieve a
                            clean, responsive, and visually appealing design
                            without writing complex custom CSS. Tailwind CSS
                            provides utility-first classes that streamline
                            styling, allowing developers to quickly prototype
                            and refine user interfaces.
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            title="Food Recipe Application"
                            description="Design & Development of a Food Recipe Application"
                            imgUrl={projImg2}
                          />
                          <p>
                            <h3>Food Recipe Application</h3>A Food Recipe
                            application is a versatile platform designed to
                            provide users with a seamless and interactive
                            experience for discovering, saving, and sharing
                            recipes. Built using modern web technologies like
                            HTML, Tailwind CSS, JavaScript, React, and Express,
                            this application ensures both aesthetics and
                            functionality. The frontend, developed with React
                            and styled using Tailwind CSS, offers a visually
                            appealing and responsive user interface, making it
                            easy to navigate across devices. Users can explore a
                            variety of recipes, search by ingredients or
                            cuisine, and view detailed instructions and
                            nutritional information. The backend, powered by
                            Express, handles data management, user
                            authentication, and API integration to fetch recipes
                            from external sources or manage user-generated
                            content. With JavaScript tying all components
                            together, the application provides real-time
                            features such as saving favorite recipes, leaving
                            reviews, and creating personalized recipe
                            collections. This modern stack ensures the Food
                            Recipe application is fast, scalable, and
                            user-friendly, catering to food enthusiasts and home
                            cooks alike.
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            title="Expense Tracker Application"
                            description="Design & Development of an Expense Tracker Application"
                            imgUrl={projImg3}
                          />
                          <p>
                            <h3>Expense Tracker Application</h3>
                            An Expense Tracker application is a dynamic and
                            interactive web-based tool designed to help users
                            manage their finances effectively. Built with a
                            modern tech stack, including HTML, Tailwind CSS,
                            JavaScript, React, and Express, it offers a seamless
                            user experience and robust backend support. The
                            application allows users to record, categorize, and
                            analyze their expenses in real time. Utilizing
                            React, the frontend provides an intuitive and
                            responsive user interface powered by Tailwind CSS,
                            ensuring aesthetic and mobile-friendly designs. The
                            backend, developed using Express, facilitates secure
                            data handling, storage, and retrieval, enabling
                            features such as user authentication, personalized
                            dashboards, and expense tracking across time
                            periods. By combining a state-of-the-art frontend
                            with a reliable backend, the Expense Tracker ensures
                            an efficient and visually appealing solution for
                            personal finance management.
                          </p>
                        </Row>
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
