import { useContext, useState } from 'react';
import { CouponContext } from '../../core/context/context';

function Slip() {
  const { coupon } = useContext(CouponContext);

  const [showEvents, setShowEvents] = useState(true);

  const totalRate = coupon?.map((sum) => {
    const odd = [Number(sum?.O)];
    return [odd]?.reduce((a, b) => a * b);
  }, 0);

  const total = parseFloat(totalRate.reduce((a, b) => a * b, 1));
  const totalPrice = total <= 2000000 ? coupon?.length < 1 ? 0.00 : (total).toLocaleString(
    undefined,
    { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  ) : (2000000).toLocaleString();

  return (
    <div className="slip">
      <div
        className="slip__header"
        onClick={() => setShowEvents(!showEvents)}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <span className={
          showEvents || coupon.length < 1
            ? 'slip__header__arrow'
            : 'slip__header__arrow-collapse'
        }
        >
          &#x279C;
        </span>
        <span className="slip__header__title">
          Kuponum
        </span>
        <span className="slip__header__count">
          {coupon?.length}
          {' '}
          Maç
        </span>
      </div>
      {showEvents
            && (
            <div className="slip__events">
              {coupon.map((event, key) => (
                <div key={key} className="slip__events__item">
                  <span className="slip__events__item__name">
                    {event?.eId}
                    {' - '}
                    {event?.eName}
                  </span>
                  <span className="slip__events__item__odd">
                    Oran:
                    {event?.O}
                  </span>
                  <span className="slip__events__item__mbs">
                    MBS:
                    {event?.MBS}
                  </span>
                </div>
              ))}
            </div>
            )}
      <span className="slip__total">
        Toplam Oran:
        {' '}
        {totalPrice}
      </span>
    </div>
  );
}

export default Slip;
