import { createContext, useMemo, useState } from 'react';

export const CouponContext = createContext(null);

function CouponProvider({ children }) {
  const [coupon, setCoupon] = useState([]);

  const addCoupon = (value) => {
    const checkOdd = coupon.some((item) => value.index === item.index);

    if (checkOdd) {
      setCoupon(coupon.filter((_coupon) => _coupon.index !== value.index));
    } else {
      setCoupon((_coupon) => [..._coupon, value]);
    }
  };

  const couponData = useMemo(() => ({ coupon, addCoupon }), [coupon]);

  return (
    <CouponContext.Provider value={couponData}>
      {children}
    </CouponContext.Provider>
  );
}

export default CouponProvider;
