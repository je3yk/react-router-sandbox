import {redirect} from 'react-router-dom';

import {updateContact} from '@app/contacts';

import {FIXME} from '../type';

export async function editAction({request, params}: FIXME) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
