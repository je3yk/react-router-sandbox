import {FC} from 'react';

import {Contact} from './components/ContactDetails';

const ContactPage: FC<{id: string}> = ({id}: {id: string}) => {
  return (
    <div id="contact">
      <Contact contactId={id} />
    </div>
  );
};

export default ContactPage;
