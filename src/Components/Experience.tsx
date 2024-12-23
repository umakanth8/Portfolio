import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Freshworks",
    role: "Software Engineer",
    date: "September 2022 - August 2023",
    description:
      "Collaborated with cross-functional teams to design and implement scalable, efficient, and reliable solutions for the freshchat product. Developed and maintained REST APIs to track metrics and manage workflows.",
    techStack: ["Java", "React", "Servlets", "Kubernetes"]
  },
  {
    id: 2,
    title: "Cognizant",
    role: "Software Engineer",
    date: "November 2020 - September 2022",
    description:
      "Designed and developed applications that integrate with cloud services for efficient data processing and workflow automation. Transitioned legacy systems to modern architectures, improving performance and scalability.",
    techStack: ["Java", "Spring Boot", "AWS", "Git"]
  }
];

export default function Experience() {
  return (
    <div>
      {/* Section Header */}
      <div
        className="d-flex align-items-center justify-content-center position-relative"
        style={{ minHeight: "20vh", background: "#000" }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "2px",
            background: "white",
            zIndex: 1
          }}
        ></div>

        <Card
          bg="black"
          className="text-center"
          style={{
            width: "50%",
            maxWidth: "300px",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            border: "1px solid white",
            zIndex: 2
          }}
        >
          <Card.Header className="text-white fs-4">Experience</Card.Header>
        </Card>
      </div>

      {/* Main Content */}
      <Container fluid id="experience-section" className="py-4">
        {/* Mobile View */}
        <div className="d-block d-md-none">
          <Carousel>
            {experiences.map((experience, index) => (
              <Carousel.Item key={index}>
                <Card
                  bg="black"
                  className="h-100"
                  style={{
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    border: "1px solid white",
                    overflow: "hidden"
                  }}
                >
                  <Card.Body>
                    <Card.Header className="text-white d-flex justify-content-between align-items-center border-bottom">
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle bg-danger me-2"
                          style={{ width: "12px", height: "12px" }}
                        ></div>
                        <div
                          className="rounded-circle bg-success me-2"
                          style={{ width: "12px", height: "12px" }}
                        ></div>
                        <div
                          className="rounded-circle bg-primary me-2"
                          style={{ width: "12px", height: "12px" }}
                        ></div>
                      </div>
                      <FaBriefcase style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                    </Card.Header>
                    <Card.Text className="text-center mt-3">
                      <h3 className="text-white fw-bold">{experience.title}</h3>
                      <h5 className="text-secondary fw-bold">{experience.role}</h5>
                      <p className="text-secondary">{experience.date}</p>
                      <p className="text-secondary">{experience.description}</p>
                      <p className="text-secondary">
                        <strong>Tech Stack:</strong>{" "}
                        <span className="text-info">{experience.techStack.join(", ")}</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Desktop View */}
        <div className="d-none d-md-block">
          <Row className="justify-content-center gx-4 gy-5">
            {experiences.map((experience, index) => (
              <Col xs={12} md={8} lg={6} key={index}>
                <Card
                  bg="black"
                  className="h-100"
                  style={{
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    border: "1px solid white",
                    overflow: "hidden"
                  }}
                >
                  <Card.Body>
                    <Card.Header className="text-white d-flex justify-content-between align-items-center border-bottom">
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle bg-danger me-2"
                          style={{ width: "12px", height: "12px" }}
                        ></div>
                        <div
                          className="rounded-circle bg-success me-2"
                          style={{ width: "12px", height: "12px" }}
                        ></div>
                        <div
                          className="rounded-circle bg-primary me-2"
                          style={{ width: "12px", height: "12px" }}
                        ></div>
                      </div>
                      <FaBriefcase style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                    </Card.Header>
                    <Card.Text className="text-center mt-3">
                      <h3 className="text-white fw-bold">{experience.title}</h3>
                      <h5 className="text-secondary fw-bold">{experience.role}</h5>
                      <p className="text-secondary">{experience.date}</p>
                      <p className="text-secondary">{experience.description}</p>
                      <p className="text-secondary">
                        <strong>Tech Stack:</strong>{" "}
                        <span className="text-info">{experience.techStack.join(", ")}</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
