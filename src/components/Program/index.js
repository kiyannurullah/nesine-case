import { Fragment } from 'react';
import Event from '../Event';
import { KG, OC } from '../../core/configs/config';
import { generateRandomId } from '../../core/utils/utils';

function Program({ bulletin, items }) {
  return (
    <div className="program">
      {items.map((i, index) => (
        <Fragment key={generateRandomId(8)}>
          {Object.values(bulletin).filter((i, key) => key === index).map((item) => {
            item.OCG['3'] = { ID: '3', N: 'H1 Maç Sonucu', OC };
            item.OCG['4'] = { ID: '4', N: 'H2 Maç Sonucu', OC };
            item.OCG['6'] = { ID: '5', N: 'KG Var/Yok', OC: KG };
            return (
              <Event
                key={item?.C}
                item={item}
                index={index}
                eId={item?.C}
              />
            );
          })}
        </Fragment>
      ))}
    </div>
  );
}

export default Program;
