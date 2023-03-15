import fsPromises from 'fs/promises';
import path from 'path';
import OddHeader from '../components/OddHeader';
import Program from '../components/Program';
import Slip from '../components/Slip';
import { useProgramContext } from '../utils/context';

function HomePage(props) {
  const { context } = useProgramContext();

  return (
    <>
      <OddHeader />
      <Program bulletin={props?.Events} />
      <Slip />
    </>
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
