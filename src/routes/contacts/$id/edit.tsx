import {
  createFileRoute,
  useLoaderData,
  useRouter,
} from '@tanstack/react-router';

import {updateContact} from '@app/contacts';

export const EditPage = () => {
  const router = useRouter();
  const {contact} = useLoaderData({from: '/contacts/$id'});

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    await updateContact(contact.id, data);

    backToContactPage();
  };

  const backToContactPage = () => {
    router.navigate({to: '/contacts/$id', params: {id: contact.id}});
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      id="contact-form"
    >
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={backToContactPage}
        >
          Cancel
        </button>
      </p>
    </form>
  );
};

export const Route = createFileRoute('/contacts/$id/edit')({
  component: () => <EditPage />,
});
