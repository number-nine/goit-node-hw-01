const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require('nanoid');

const contactsPath = path.join(__dirname, "db\\contacts.json");

console.log(contactsPath);



module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

async function listContacts() {
    const response = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(response);
    return contacts;
    
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const contact = contacts.find(contact => contact.id === contactId);
    return contact || null;
}

async function removeContact(contactId) {
    const contacts = await listContacts(); 
}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 1));
    return contacts;
}


addContact("new name", "test@test", "67367622203").then((res) => {
  console.log("-----------------");
//   console.log(nanoid());
//   console.log(res);
});