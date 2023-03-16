import Odd from "../Odd";

function OddWrapper({ ocg }) {
  return (
    <div className="program__market__odd-wrapper">
      {Object.values(ocg?.OC).map((odd, oddKey) => (
       <Odd key={oddKey} odd={odd} />
      ))}
    </div>
  );
}

export default OddWrapper;
