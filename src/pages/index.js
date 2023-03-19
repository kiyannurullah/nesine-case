import { useState } from 'react';
import useFetch from '../../core/hooks/useFetch';
import Program from '../components/Program';
import Slip from '../components/Slip';

function HomePage(props) {
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
  const data = '/src/assets/bulten_data.json';

  return {
    props: useFetch(data),
  };
}

export default HomePage;
