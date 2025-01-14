import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  fs.writeFileSync(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');
};
