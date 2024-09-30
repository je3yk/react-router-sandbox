import {getContact} from '../../../../contacts';
import {ContactPageData} from './type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

export async function contactLoader({params}: FIXME): Promise<ContactPageData> {
  const contact = await getContact(params.contactId);
  return {contact};
}
