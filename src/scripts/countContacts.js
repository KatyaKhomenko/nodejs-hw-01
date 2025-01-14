import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const db = await readContacts();
    return db.length;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

console.log(await countContacts());
