export interface Contact {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface ContactResponse {
    count: string;
    perPage: string;
    currentPage: string;
    totalPage: string;
    results: Contact[];
}

export interface ContactState {
    count: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    contacts: Contact[];
    contactEdit: Contact
}

export interface AddContact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface IFormContact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface ContactCreated extends Contact {
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
}

export interface IContactEdit extends AddContact {
    contactId: string;
}