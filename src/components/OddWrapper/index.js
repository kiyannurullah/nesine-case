import Odd from '../Odd';
import { eventData } from '../../../core/utils/utils';

function OddWrapper({
  ocg, eName, eIndex, eId,
}) {
  return (
    <div className="program__market__odd-wrapper">
      {Object.values(ocg?.OC).map((odd, i) => {
        eventData(odd, eIndex, eId, eName, i);
        return (
          <Odd
            key={odd?.index}
            odd={odd}
          />
        );
      })}
    </div>
  );
}

export default OddWrapper;
