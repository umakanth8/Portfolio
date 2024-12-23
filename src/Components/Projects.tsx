import { Card, Carousel } from "react-bootstrap";

const projects = [
  {
    id: 1,
    title: "Food Volunteer Web Application",
    description:
      "The application facilitates the management of food donations, helping volunteers track and distribute food to those in need. It includes features like user authentication, food tracking, and real-time updates to enhance coordination and ensure the efficient delivery of food to local communities.",
  },
  {
    id: 2,
    title: "Airbnb Pricing Prediction Model",
    description:
      "Built a predictive model for Airbnb pricing in NYC using linear regression and random forest techniques. The model analyzes historical data to forecast pricing trends, helping property owners optimize pricing strategies. Achieved an impressive accuracy rate of 95%, improving pricing decisions and boosting revenue potential for Airbnb hosts in the region.",
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

      {/* Desktop View */}
      <div className="d-none d-md-flex flex-wrap justify-content-center p-5" style={{ background: "#000" }}>
        {projects.map((project) => (
          <Card
            key={project.id}
            bg="black"
            className="text-center m-3"
            style={{
              width: "30rem",
              height: "20rem",
              boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
              overflow: "hidden",
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
              <Card.Text className="text-white mt-3">{project.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Mobile View */}
      <Carousel className="d-block d-md-none p-4" style={{ background: "#000" }}>
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <Card
              bg="black"
              className="text-center mx-auto"
              style={{
                width: "80%",
                maxWidth: "350px",
                boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                overflow: "hidden",
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
                <Card.Text className="text-white mt-3">{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
