import CardService from "./cardService";
import serviceData from "./serviceData";

export default function Service() {
  const Elements = serviceData.map((el) => (
    <CardService title={el.title} desc={el.desc} />
  ));
  return (
    <div className="container">
      <h2 className="mt-3"> Our Services</h2>
      <p>
        The services we offer are tailored and contextualized to meet and exceed
        our clients’ expectations ensuring that the client’s assignment
        objectives are met. We offer the following services:{" "}
      </p>
      {Elements}
    </div>
  );
}
