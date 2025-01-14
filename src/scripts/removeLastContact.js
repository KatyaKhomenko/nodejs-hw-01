import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const db = await readContacts();

    if (db.length === 0) {
      console.log('Empty array');
      return;
    }

    db.pop();

    writeContacts(db);
    console.log('Last contact removed.');
  } catch (error) {
    console.error('Error removing last contact: ', error);
  }
};

removeLastContact();
