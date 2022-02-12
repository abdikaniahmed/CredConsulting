import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  Button
} from "reactstrap";
export default function Contact() {
  return (
    <div className="container-fluid">
      <h1 className="text-center my-4">Contact Us</h1>
      <Row className="m-2">
        <Col md="6">
          <h4 className="my-2">Contact Details</h4>
          <Row>
            <Col md="2">
              <h5>Address:</h5>
            </Col>
            <Col md="10">
              Hawse Plaza Building, Opposite to Durdur Business Center,
              Presidential Road, Hargaisa Somaliland
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <h5>Email:</h5>
            </Col>
            <Col md="10">
              <a href="mailto:info@credconsulting.org">
                info@credconsulting.org
              </a>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <h5>Mobile:</h5>
            </Col>
            <Col md="10">+252 63 4459504</Col>
          </Row>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <Label>Your Name</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>Your Email</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>Subject</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label for="textA">Your message</Label>
              <Input id="textA" name="text" type="textarea" rows="5" />
            </FormGroup>
            <Button className="" color="primary" size="xxl" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
