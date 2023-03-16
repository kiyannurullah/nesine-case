import Event from '../Event';
import { KG, OC } from '../../utils/config';

function Program({ bulletin, items }) {
  return (
    <div className="program">
      {items.map((i, index) => (
        <>
          {Object.values(bulletin).filter((i, key) => key === index).map((item, key) => {
            item.OCG['3'] = { ID: '3', N: 'H1 Maç Sonucu', OC };
            item.OCG['4'] = { ID: '4', N: 'H2 Maç Sonucu', OC };
            item.OCG['6'] = { ID: '5', N: 'KG Var/Yok', OC: KG };
            return (
              <Event item={item} index={index} />
            );
          })}
        </>
      ))}
    </div>
  );
}

export default Program;
