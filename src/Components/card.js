import { Card, CardBody, CardTitle, CardText } from "reactstrap";
export default function Cards(props) {
  return (
    <Card className="my-3">
      <CardBody>
        <CardTitle tag="h2">{props.title}</CardTitle>
        <CardText>
          {props.body}
          <ul>{props.points}</ul>
        </CardText>
      </CardBody>
    </Card>
  );
}
