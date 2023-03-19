import fsPromises from 'fs/promises';
import path from 'path';

const useFetch = async (data) => {
    const filePath = path.join(process.cwd(), data);
    const jsonData = await fsPromises.readFile(filePath);
    return JSON.parse(jsonData);
}

export default useFetch;
