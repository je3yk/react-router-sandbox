import {Link, useRouter} from '@tanstack/react-router';

import {ContactType, deleteContact} from '@app/contacts';

export const ContactDetails = ({contact}: {contact: ContactType}) => {
  const router = useRouter();

  const handleContactDelete = async () => {
    try {
      const confirm = await window.confirm(
        'Please confirm you want to delete this record.',
      );

      if (!confirm) {
        throw new Error('User cancelled');
      }

      await deleteContact(contact.id);
      router.navigate({to: '/contacts'});
      // await deleteContact(contact.id);
    } catch {
      alert('Failed to delete contact');
    }
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={
            contact.avatar ??
            `https://robohash.org/${contact.id}.png?size=200x200`
          }
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ?
            <>
              {contact.first} {contact.last}
            </>
          : <i>No Name</i>}{' '}
          {/* <Favorite contact={contact} /> */}
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div id="contact-controls">
          <Link
            to="/contacts/$id/edit"
            params={{id: contact.id}}
            type="button"
          >
            Edit
          </Link>
          <button
            className="destroy"
            onClick={handleContactDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
