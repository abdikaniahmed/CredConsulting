// import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import data from "./data";
import Cards from "./card";
export default function About() {
  const cardE = data.map((card) => {
    const pt = card.point.map((el) => (el ? <li> {el} </li> : ""));
    return <Cards title={card.title} body={card.body} points={pt} />;
  });
  return (
    <div className="container">
      <h1 className="text-center bold my-3">About Us</h1>
      <h3>CRED CONSULTING</h3>
      <p>
        CRED consulting was established in 2015, born out of the need to provide
        solutions and respond to the overwhelming needs of institutional
        capacity building and organizational development in Somalia/Somaliland.
        Cred catalyzes new approaches and provides specialized professional
        support services for its partners/clients to ensure that they have a
        proper grasp of the local environment that they operate in.
      </p>
      <p>
        Over the years, CRED Consulting has distinguished itself as the go-to
        organization in Somalia/Somaliland by offering top-notch management
        consulting, research, evaluation, and monitoring and development
        services to its clients. CRED has a team of experts that it relies on to
        deliver quality services in all assignments.
      </p>
      <p>
        CRED’s strengths are in the fields of research, monitoring and
        evaluation, organizational capacity building and documentation. CRED is
        steadily building its human resource profile by continuously bringing on
        board experts from various fields. We pride ourselves in our diverse
        personnel with expertise in organizational development, statistics,
        research, evaluation, surveys, training, development, communication,
        demography, market assessment, market development, economic policy and
        planning.
      </p>
      <p>
        CRED’s expansion strategy is cognizant of the dynamic nature of the
        humanitarian and development world and thus responds accordingly. CRED’s
        track record speaks for itself a testament of its dedication to its
        clients who continue to give glowing recommendations that have resulted
        in repeat business and many more referrals.
      </p>
      {cardE}
    </div>
  );
}
