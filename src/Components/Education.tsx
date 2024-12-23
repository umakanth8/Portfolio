import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";
import ubLogo from "./ub.png";

const educationData = [
  {
    degree: "Master’s Degree",
    duration: "2023 - 2024 December",
    field: "Computer and Information Science",
    university: "University at Buffalo",
    description: "",
    logo: ubLogo,
  },
  {
    degree: "Bachelor’s Degree",
    duration: "2016 - 2020",
    field: "B.E Civil Engineering",
    university: "SSN College of Engineering",
    description: "",
    logo: process.env.PUBLIC_URL +"/Assets/ssn.jpg",
  },
];

export default function Education() {
  return (
    <div>
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
            zIndex: 1,
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
            zIndex: 2,
          }}
        >
          <Card.Header style={{ color: "white" }}>Education</Card.Header>
        </Card>
      </div>

      <Container fluid id="education-section" className="py-4">

        <div className="d-block d-md-none">
          <Carousel>
            {educationData.map((data, index) => (
              <Carousel.Item key={index}>
                <Card
                  bg="black"
                  className="h-100"
                  style={{
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    border: "1px solid white",
                    overflow: "hidden",
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
                      <FaUserGraduate style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                    </Card.Header>
                    <Card.Text className="text-center mt-3">
                      <Row className="align-items-center g-3">
                        <Col xs={12} sm={5} className="text-center">
                          <img
                            src={data.logo}
                            alt={data.degree}
                            className="img-fluid rounded"
                            style={{ objectFit: "cover", maxHeight: "180px" }}
                          />
                        </Col>
                        <Col xs={12} sm={7} className="text-start">
                          <h4 style={{ color: "white", fontWeight: "bold" }}>
                            {data.duration}
                          </h4>
                          <h3 style={{ color: "white", fontWeight: "bold" }}>
                            {data.degree}
                          </h3>
                          <p style={{ color: "#C0C0C0", fontWeight: "bold" }}>
                            {data.field}
                          </p>
                          <p style={{ color: "#C0C0C0", fontWeight: "bold" }}>
                            {data.university}
                          </p>
                          {data.description && (
                            <p style={{ color: "#C0C0C0", fontWeight: "bold" }}>
                              {data.description}
                            </p>
                          )}
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>


        <div className="d-none d-md-block">
          <Row className="justify-content-center gx-4 gy-5">
            {educationData.map((data, index) => (
              <Col xs={12} md={8} lg={6} key={index}>
                <Card
                  bg="black"
                  className="h-100"
                  style={{
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    border: "1px solid white",
                    overflow: "hidden",
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
                      <FaUserGraduate style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                    </Card.Header>
                    <Card.Text className="text-center mt-3">
                      <Row className="align-items-center g-3">
                        <Col xs={12} sm={5} className="text-center">
                          <img
                            src={data.logo}
                            alt={data.degree}
                            className="img-fluid rounded"
                            style={{ objectFit: "cover", maxHeight: "180px" }}
                          />
                        </Col>
                        <Col xs={12} sm={7} className="text-start">
                          <h4 style={{ color: "white", fontWeight: "bold" }}>
                            {data.duration}
                          </h4>
                          <h3 style={{ color: "white", fontWeight: "bold" }}>
                            {data.degree}
                          </h3>
                          <p style={{ color: "#C0C0C0", fontWeight: "bold" }}>
                            {data.field}
                          </p>
                          <p style={{ color: "#C0C0C0", fontWeight: "bold" }}>
                            {data.university}
                          </p>
                          {data.description && (
                            <p style={{ color: "#C0C0C0", fontWeight: "bold" }}>
                              {data.description}
                            </p>
                          )}
                        </Col>
                      </Row>
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
