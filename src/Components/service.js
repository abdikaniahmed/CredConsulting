import CardService from "./cardService";
import serviceData from "./serviceData";

export default function Service() {
  const Elements = serviceData.map((el) => (
    <CardService title={el.title} img={el.img} desc={el.desc} />
  ));
  return { Elements };
}
