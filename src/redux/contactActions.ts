import { createAsyncThunk } from '@reduxjs/toolkit'
import { getContacts, addContact, getContact, updateContact, deleteContact } from '../services/contactServices'
import { AddContact, IContactEdit } from '../common/interfaces'

export const getContactsAction = createAsyncThunk(
    'contact/getContacts',
    async (page?: number) => {
        const data = await getContacts(page)
        return {
            count: data.count,
            perPage: data.perPage,
            currentPage: data.currentPage,
            totalPages: data.totalPages,
            results: data.results
        }
    }
)

export const addContactAction = createAsyncThunk(
    'contact/addContact',
    async ({ firstName, lastName, email, phone }: AddContact) => {
        const data = await addContact({ firstName, lastName, email, phone })
        return { newContact: data }
    }
)

export const getContactAction = createAsyncThunk(
    'contact/getContact',
    async (contactId: string) => {
        const data = await getContact(contactId)
        return {
            contact: data
        }
    }
)

export const updateContactAction = createAsyncThunk(
    'contact/updateContact',
    async ({ contactId, firstName, lastName, email, phone }: IContactEdit) => {
        const data = await updateContact({ contactId, firstName, lastName, email, phone })
        console.log(data)
        return { updatedContact: data }
    }
)

export const deleteContactAction = createAsyncThunk(
    'contact/deleteContact',
    async (contactId: string) => {
        const data = await deleteContact(contactId)
        return { deleteContact: data }
    }
)