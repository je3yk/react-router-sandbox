import {NavBar} from './NavBar';
import {SearchBox} from './SearchBox';

export default function Layout({
  children,
  pathPrefix = '',
}: {
  children: React.ReactNode;
  pathPrefix?: string;
}) {
  return (
    <>
      <div id="sidebar">
        <h1>React Router &lt;&gt; vite-plugin-pages</h1>
        <SearchBox />
        <NavBar pathPrefix={pathPrefix} />
      </div>
      <div id="detail">{children}</div>
    </>
  );
}
