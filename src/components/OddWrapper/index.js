import Odd from '../Odd';

function OddWrapper({ ocg, eName, eIndex }) {
  return (
    <div className="program__market__odd-wrapper">
      {Object.values(ocg?.OC).map((odd, i) => (
        <Odd key={i} odd={odd} eName={eName} eIndex={eIndex} index={i} />
      ))}
    </div>
  );
}

export default OddWrapper;
