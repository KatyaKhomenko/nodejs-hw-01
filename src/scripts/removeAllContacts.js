import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const db = [];
    writeContacts(db);
    console.log('All contacts removed.');
  } catch (error) {
    console.error('Error removing contact: ', error);
  }
};

removeAllContacts();
