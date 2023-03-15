import OddHeader from "../OddHeader";

function Program({ bulletin }) {
  return (
    <div className="program">
      {Object.values(bulletin)?.map((item, key) => (
        <div key={item?.C} className="program__event">
          <div className="program__event__date">
            {key} {item?.D} {item?.DAY} {item?.LN}
            <span>
              <OddHeader />
            </span>
          </div>
          <div>
            {item?.C} {item?.T} {item?.N}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Program;
