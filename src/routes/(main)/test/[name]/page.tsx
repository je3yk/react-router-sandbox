import {useLoaderData} from 'react-router-dom';

export const TestPage = () => {
  const {name} = useLoaderData() as {name: string};
  return <div>Test Page: {name}</div>;
};
