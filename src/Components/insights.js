import insightdata from "./insightdata";
import Insigh from "./cardinsight";

export default function Insights() {
  const elementsInsight = insightdata.map((el) => (
    <div key={el.id} className="col-md-4 col-sm-6">
      <Insigh title={el.title} body={el.body} feature={el.feature} />
    </div>
  ));
  return (
    <div className="container">
      <div className="row m-auto">{elementsInsight}</div>;
    </div>
  );
}
