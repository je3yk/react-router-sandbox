import {LoaderFunctionArgs} from 'react-router-dom';

export function testLoader({params}: LoaderFunctionArgs): {name?: string} {
  return {name: params.name};
}
