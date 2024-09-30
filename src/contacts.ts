import localforage from 'localforage';
import {matchSorter} from 'match-sorter';
import sortBy from 'sort-by';

export type ContactType = {
  id: string;
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
  createdAt: number;
};

export async function getContacts(query?: string): Promise<ContactType[]> {
  await fakeNetwork(query && `getContacts:${query}`);
  let contacts: ContactType[] | null = await localforage.getItem('contacts');
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, {keys: ['first', 'last']});
  }
  return contacts.sort(sortBy('last', 'createdAt'));
}

export async function createContact(newContact?: Partial<ContactType>) {
  await fakeNetwork();
  const id = Math.random().toString(36).substring(2, 9);

  const contact = {
    id,
    createdAt: Date.now(),
    first: 'John',
    last: 'Doe',
    avatar: 'https://robohash.org/you.png?size=200x200',
    twitter: 'exampleHandle',
    notes: 'Some notes',
    favorite: false,
    ...newContact,
  };

  const contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: ContactType['id']) {
  await fakeNetwork(`contact:${id}`);
  const contacts = (await localforage.getItem('contacts')) as ContactType[];
  const contact = contacts.find((contact) => contact.id === id);
  return contact ?? null;
}

export async function updateContact(
  id: ContactType['id'],
  updates: Partial<ContactType>,
) {
  await fakeNetwork();
  const contacts = (await localforage.getItem('contacts')) as ContactType[];
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: ContactType['id']) {
  const contacts = (await localforage.getItem('contacts')) as ContactType[];
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: ContactType[]) {
  return localforage.setItem('contacts', contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: Record<string, unknown> = {};

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  } else if (fakeCache[key]) {
    return;
  } else {
    fakeCache[key] = true;
  }

  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
