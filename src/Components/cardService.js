import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function CardService(props) {
  return (
    <Card className="my-3">
      <CardBody>
        <CardTitle tag="h3">{props.title}</CardTitle>
        <CardText>{props.desc}</CardText>
      </CardBody>
    </Card>
  );
}
