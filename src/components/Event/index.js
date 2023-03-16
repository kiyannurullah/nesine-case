import { result } from '../../utils/config';
import Odd from '../Odd';

function Event({ item, index }) {
  return (
    <div key={item?.key} className="program__market">
      <div className="program__event__info">
        {index}
        {' '}
        {item?.D}
        {' '}
        {item?.DAY}
        {' '}
        {item?.LN}
      </div>
      <ul key={item?.C} className="program__event">
        <li className="program__event__id">{item?.C}</li>
        <li className="program__event__date">{item?.T}</li>
        <li className="program__event__teamName">{item?.N}</li>
        {Object.values(item?.OCG).map((ocg, ocgKey) => {
          if (ocg.N === 'Maç Sonucu') {
            ocg.OC['2'] = result;
          }
          return (
            <div key={ocgKey} className="program__market__item">
              <div className="program__market__item__title">{ocg.N}</div>
              <Odd ocg={ocg} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Event;
