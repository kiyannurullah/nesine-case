import Odd from '../Odd';

function OddWrapper({
  ocg, eName, eIndex, eId,
}) {
  return (
    <div className="program__market__odd-wrapper">
      {Object.values(ocg?.OC).map((odd, i) => {
        odd.index = `${eIndex}-${i}-${odd?.ID}`;
        odd.eName = eName;
        odd.eId = eId;
        odd.isSelected = false;
        return(
            <Odd
                key={i}
                odd={odd}
            />
        )
      })}
    </div>
  );
}

export default OddWrapper;
