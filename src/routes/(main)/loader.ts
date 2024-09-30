import {ContactType, getContacts} from '../../contacts';

export type RootLoaderData = {
  contacts: ContactType[];
};

export async function loader(): Promise<RootLoaderData> {
  const contacts = await getContacts();
  return {contacts};
}
