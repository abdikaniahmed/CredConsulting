import { Col, Row } from "reactstrap";
export default function Home() {
  return (
    <div className="container">
      <h1 className="m-4 text-center"> Welcome to Cred Consulting</h1>
      <Row className="row">
        <Col md="6">
          <p>
            Center for Research, Evaluation and Development (CRED) was
            established in 2015, born out of the need to provide solutions and
            respond to the overwhelming needs of institutional capacity
            building, business, and investment and development organizations
            operating in Somaliland/Somalia. CRED catalyzes new approaches and
            provides specialized professional support services for development
            partners thus ensuring that they have a proper grasp of the local
            environment that they operate in.
          </p>
          <img src="./images/credConsulting.jpg" alt="cred" width="100%" />
        </Col>
        <Col md="6" className="left-side">
          <h2>Vision</h2>
          <p>
            To be recognized as the key solutions provider in East Africa with
            high skilled, professional young people who have what it takes to
            solve country’s toughest problems.
          </p>
          <h2>Mission</h2>
          <p>
            To provide uncompromising quality, top-notch consulting services and
            innovative approaches coupled with realistic and executable
            recommendations to help organizations make the best decisions for
            that add value.
          </p>
        </Col>
      </Row>
      <Row className="row R2">
        <Col className="RC">
          <h2>68</h2>
          <p>Clients</p>
        </Col>
        <Col className="RC">
          <h2>50</h2>
          <p>Projects</p>
        </Col>
        <Col className="RC">
          <h2>24</h2>
          <p>Repairing</p>
        </Col>
        <Col>
          <h2>10</h2>
          <p>Awards</p>
        </Col>
      </Row>
    </div>
  );
}
