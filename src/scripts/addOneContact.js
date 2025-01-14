import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const db = await readContacts();
    const newContact = createFakeContact();

    db.push(newContact);
    writeContacts(db);
    console.log('New contact added.');
  } catch (error) {
    console.error('Error adding contact: ', error);
  }
};

addOneContact();
