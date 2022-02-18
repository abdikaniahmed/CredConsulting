import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export default function Insight(props) {
  return (
    <Card className="my-3">
      <CardImg
        alt={props.title}
        width="100px"
        height="300"
        src={props.feature}
      />
      <CardBody>
        <CardTitle tag="h3">{props.title}</CardTitle>
        <CardText>{props.body}</CardText>
      </CardBody>
    </Card>
  );
}
