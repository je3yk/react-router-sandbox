import {FC} from 'react';

const AboutPage: FC<{name: string}> = ({name}: {name: string}) => {
  return (
    <div>
      <h1>About</h1>
      <p>{name} it is a pleasure to meet you!</p>
      <p>
        This application has been created to test the react router with
        directory based routing system.
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

export default AboutPage;
