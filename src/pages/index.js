import fsPromises from 'fs/promises';
import path from 'path';
import { useState } from 'react';
import Program from '../components/Program';
import Slip from '../components/Slip';
import { useProgramContext } from '../utils/context';

function HomePage(props) {
  const { context } = useProgramContext();

  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 100);
  };

  const onHandleScroll = (e) => {
    e.persist();
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      fetchMoreData();
    }
  };

  return (
    <div
      onScroll={onHandleScroll}
      className="wrapper"
    >
      <div className="container">
        <Program
          bulletin={props?.Events}
          items={items}
          fetchMoreData={fetchMoreData}
        />
        <Slip />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), '/src/assets/bulten_data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

export default HomePage;
