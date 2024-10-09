import {createContact} from '@app/contacts';

export const SearchBox = () => {
  const handleNewContactCreate = async () => {
    await createContact();
    window.location.reload();
  };

  return (
    <div>
      <form
        id="search-form"
        role="search"
      >
        {/* <input
          id="q"
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="q"
        />
        <div
          id="search-spinner"
          aria-hidden
          hidden={true}
        />
        <div
          className="sr-only"
          aria-live="polite"
        ></div> */}
      </form>
      <button
        type="submit"
        style={{width: '100%'}}
        onClick={handleNewContactCreate}
      >
        New contact
      </button>
    </div>
  );
};
