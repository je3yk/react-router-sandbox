import {createFileRoute, useParams} from '@tanstack/react-router';

const AboutPage = () => {
  const {name} = useParams({from: '/about/$name'});

  return (
    <div>
      <h1>About</h1>
      <p>{name} it is a pleasure to meet you!</p>
      <p>
        This application has been created to test the @tanstack-router with
        file-based routing system.
      </p>
      <p>
        For more details check the Github repository{' '}
        <a
          href="https://github.com/je3yk/react-router-sandbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/je3yk/react-router-sandbox
        </a>
      </p>
    </div>
  );
};

export const Route = createFileRoute('/about/$name')({
  component: () => <AboutPage />,
});
