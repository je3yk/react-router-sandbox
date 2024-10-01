import {ContactType, createContact} from '../contacts';

export async function action(): Promise<{contact: ContactType}> {
  const contact = await createContact();
  return {contact};
}
