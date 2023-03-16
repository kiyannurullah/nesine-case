function Odd({ odd }) {
    return (
        <li
            data-key={odd?.N}
            className={`program__event__odd ${odd?.O === '-'
                ? 'program__event__odd__disable'
                : ''}`}
        >
            <span>{odd?.N}</span>
            <span>{odd?.O}</span>
        </li>
    );
}

export default Odd;
