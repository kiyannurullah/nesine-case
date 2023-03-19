import { result } from '../../core/configs/config';
import OddWrapper from '../OddWrapper';
import { eventDrawer } from '../../core/utils/utils';

function Event({ item, index, eId }) {
  return (
    <div className="program__market">
      <div className="program__event__info">
        {eventDrawer(index, item)}
      </div>
      <ul key={item?.C} className="program__event">
        <li className="program__event__id">{item?.C}</li>
        <li className="program__event__date">{item?.T}</li>
        <li className="program__event__teamName">
          {item?.N}
          <span className="program__event__mbs" title="Minimum Bahis Sayısı">
            {item?.OCG[1]?.MBS}
          </span>
        </li>
        {Object.values(item?.OCG).map((ocg, key) => {
          if (ocg?.N === 'Maç Sonucu') {
            ocg.OC['2'] = result;
          }
          return (
            <div key={key} className="program__market__item">
              <div className="program__market__item__title">{ocg.N}</div>
              <OddWrapper
                ocg={ocg}
                eName={item?.N}
                eIndex={index}
                eId={eId}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Event;
