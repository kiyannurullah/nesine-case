import {fireEvent, render} from "@testing-library/react";
import Odd from "./index";
import CouponProvider from "../../../core/context/context";

it('Odd click event', () => {
    const { container } = render(<CouponProvider><Odd /></CouponProvider>);
    fireEvent.click(container.querySelector('.program__event__odd'));
    expect(container).toMatchSnapshot();
});
