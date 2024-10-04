class ContactBook {
    constructor() {
        this.contacts = [];
    }


    addContact(name, phone, email) {
        const newContact = { name, phone, email };
        this.contacts.push(newContact);
    }

    findContactByName(name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    }
}


const myContactBook = new ContactBook();
myContactBook.addContact("John Doe", "+1234567890", "john.doe@example.com");
myContactBook.addContact("Jane Smith", "+0987654321", "jane.smith@example.com");

const foundContact = myContactBook.findContactByName("Jane Smith");
console.log(foundContact);
