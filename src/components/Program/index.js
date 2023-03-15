function Program({ bulletin }) {
  console.log(bulletin);
  return (
    <div>
      {Object.values(bulletin)?.map((item) => (
        <div key={item?.C}>
          {item?.N}
        </div>
      ))}
    </div>
  );
}

export default Program;
