import Odd from '../Odd';

function OddWrapper({
  ocg, eName, eIndex, eId,
}) {
  return (
    <div className="program__market__odd-wrapper">
      {Object.values(ocg?.OC).map((odd, i) => (
        <Odd
          key={i}
          odd={odd}
          eName={eName}
          eIndex={eIndex}
          index={i}
          eId={eId}
        />
      ))}
    </div>
  );
}

export default OddWrapper;
