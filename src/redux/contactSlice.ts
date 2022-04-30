import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactState } from '../common/interfaces'
import { getContactsAction, addContactAction, getContactAction, updateContactAction } from './contactActions'

const initialState: ContactState = {
    count: 0,
    perPage: 0,
    currentPage: 0,
    totalPages: 0,
    contacts: [],
    contactEdit: {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getContactsAction.fulfilled, (state, action: PayloadAction<any>) => {
                state.count = action.payload.count
                state.perPage = action.payload.perPage
                state.currentPage = action.payload.currentPage
                state.totalPages = action.payload.totalPages
                state.contacts = action.payload.results
            })
            .addCase(addContactAction.fulfilled, (state, action: PayloadAction<any>) => {
                state.contacts.push(action.payload.newContact)
            })
            .addCase(getContactAction.fulfilled, (state, action: PayloadAction<any>) => {
                state.contactEdit = action.payload.contact
            })
            .addCase(updateContactAction.fulfilled, (state, action: PayloadAction<any>) => {
                state.contactEdit = action.payload.updatedContact
            })
    },
})

export default contactSlice.reducer