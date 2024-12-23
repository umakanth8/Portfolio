import { Card, Carousel, Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    id: 1,
    title: "Food Volunteer Web Application",
    description:
      "The application facilitates the management of food donations, helping volunteers track and distribute food to those in need. It includes features like user authentication, food tracking, email service and real-time updates to enhance coordination and ensure the efficient delivery of food to local communities.",
    techStack: ["Java", "SpringBoot", "MySQL", "JSP"],
  },
  {
    id: 2,
    title: "Airbnb Pricing Prediction Model",
    description:
      "Built a predictive model for Airbnb pricing in NYC using linear regression and random forest techniques. The model analyzes historical data to forecast pricing trends, helping property owners optimize pricing strategies. Achieved an impressive accuracy rate of 95%, boosting revenue potential for Airbnb hosts in the region.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
  },
];

export default function Projects() {
  return (
    <div>
      {/* Section Header */}
      <div
        className="d-flex align-items-center justify-content-center position-relative"
        style={{ minHeight: "30vh", background: "#000" }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "2px",
            background: "white",
            zIndex: 1,
          }}
        ></div>

        <Card
          bg="black"
          className="text-center"
          style={{
            width: "40%",
            maxWidth: "400px",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            overflow: "hidden",
            border: "1px solid white",
            zIndex: 2,
          }}
        >
          <Card.Header className="text-white">Projects</Card.Header>
        </Card>
      </div>

      <Container fluid id="projects-section" className="py-4">
        {/* Mobile View */}
        <div className="d-block d-md-none">
          <Carousel>
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <Card
                  bg="black"
                  className="h-100 mx-auto"
                  style={{
                    width: "90%",
                    maxWidth: "350px",
                    minHeight: "400px", // Ensures consistent card height
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    border: "1px solid white",
                  }}
                >
                  <Card.Body>
                    <Card.Header
                      className="text-white fw-bold fs-5 border-bottom"
                      style={{ borderColor: "white" }}
                    >
                      {project.title}
                    </Card.Header>
                    <Card.Text className="text-secondary mt-3">
                      {project.description}
                    </Card.Text>
                    <Card.Text className="text-secondary">
                      <strong>Tech Stack:</strong>{" "}
                      <span className="text-info">{project.techStack.join(", ")}</span>
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
            {projects.map((project, index) => (
              <Col xs={12} md={8} lg={6} key={index}>
                <Card
                  bg="black"
                  className="h-100"
                  style={{
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    border: "1px solid white",
                  }}
                >
                  <Card.Body>
                    <Card.Header
                      className="text-white fw-bold fs-5 border-bottom"
                      style={{ borderColor: "white" }}
                    >
                      {project.title}
                    </Card.Header>
                    <Card.Text className="text-secondary mt-3">
                      {project.description}
                    </Card.Text>
                    <Card.Text className="text-secondary">
                      <strong>Tech Stack:</strong>{" "}
                      <span className="text-info">{project.techStack.join(", ")}</span>
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
