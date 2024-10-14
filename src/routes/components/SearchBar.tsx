import {useState} from 'react';

import {useRouter} from '@tanstack/react-router';

import {createContact} from '@app/contacts';

const AddContact = () => {
  const router = useRouter();
  const [creating, setCreating] = useState(false);

  const handleAddContact = async () => {
    setCreating(true);
    try {
      await createContact();
      router.invalidate();
    } catch {
      alert('Failed to add contact');
    } finally {
      setCreating(false);
    }
  };
  return (
    <button onClick={handleAddContact}>
      {creating ? 'Creating new contact' : '+ Create new'}
    </button>
  );
};

const SearchBox = () => {
  const router = useRouter();

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    router.navigate({to: '/contacts', search: {name: data.name.toString()}});
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Search by name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export const SearchBar = () => {
  return (
    <div id="search-bar">
      <SearchBox />
      <AddContact />
    </div>
  );
};
