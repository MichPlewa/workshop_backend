import { fetchTables } from '../../../Redux/adRedux';

const Ad = () => {
  console.log(fetchTables());
  return <div>ad</div>;
};

export default Ad;
