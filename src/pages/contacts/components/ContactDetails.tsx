import {useEffect, useState} from 'react';

import {Form} from 'react-router-dom';

import {ContactType, getContact} from '@app/contacts';

export function Favorite({contact}: {contact: ContactType}) {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}

export const Contact = ({contactId}: {contactId: ContactType['id']}) => {
  const [contactDetails, setContactDetails] = useState<ContactType | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      setLoading(true);
      const contact = await getContact(contactId);
      setContactDetails(contact);
      setLoading(false);
    };

    void fetchContact();
  }, [contactId]);

  if (loading) {
    return <p>Loading contact...</p>;
  }

  if (!contactId) {
    return <p>Contact Id is undefined</p>;
  }

  if (!contactDetails) {
    return <p>Contact not found</p>;
  }

  return (
    <div id="contact">
      <div>
        <img
          key={contactDetails.avatar}
          src={
            contactDetails.avatar ??
            `https://robohash.org/${contactDetails.id}.png?size=200x200`
          }
        />
      </div>

      <div>
        <h1>
          {contactDetails.first || contactDetails.last ?
            <>
              {contactDetails.first} {contactDetails.last}
            </>
          : <i>No Name</i>}{' '}
          <Favorite contact={contactDetails} />
        </h1>

        {contactDetails.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contactDetails.twitter}`}
            >
              {contactDetails.twitter}
            </a>
          </p>
        )}

        {contactDetails.notes && <p>{contactDetails.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete (not working)</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
