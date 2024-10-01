import {Form} from 'react-router-dom';

export const SearchBox = () => {
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
      <Form
        method="post"
        style={{width: '100%'}}
      >
        <button
          type="submit"
          style={{width: '100%'}}
        >
          New contact
        </button>
      </Form>
    </div>
  );
};
