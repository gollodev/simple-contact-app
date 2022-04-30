import axios from 'axios'
import { AddContact, Contact, ContactCreated, IContactEdit } from '../common/interfaces'
const baseUrl = 'https://bkbnchallenge.herokuapp.com'

export const getContacts = (page: number = 1): Promise<any> => {
    return axios.get(`${baseUrl}/contacts?page=${page}`)
        .then(response => response.data)
        .catch(error => error.message)
}

export const addContact = ({ firstName, lastName, email, phone }: AddContact): Promise<ContactCreated> => {
    return axios.post(`${baseUrl}/contacts`, { firstName, lastName, email, phone })
        .then(response => response.data)
        .catch(error => error.message)
}

export const getContact = (contactId: string): Promise<any> => {
    return axios.get(`${baseUrl}/contacts/${contactId}`)
        .then(response => response.data)
        .catch(error => error.message)
}

export const updateContact = ({ contactId, firstName, lastName, email, phone }: IContactEdit): Promise<ContactCreated> => {
    return axios.put(`${baseUrl}/contacts/${contactId}`, { firstName, lastName, email, phone })
        .then(response => response.data)
        .catch(error => error.message)
}

export const deleteContact = (contactId: string): Promise<any> => {
    return axios.delete(`${baseUrl}/contacts/${contactId}`)
        .then(response => response.data)
        .catch(error => error.message)
}
