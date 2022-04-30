import { FC, useState, useEffect, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

import {
    Container,
    Grid,
    Box,
    Button,
    CircularProgress,
    Stack,
    Pagination
} from '@mui/material'

import { getContactsAction } from '../../redux/contactActions'
import { useAppDispatch, useAppSelector } from '../../hooks/toolkit'
import ContactCard from '../../components/ContactCard'
import { Contact } from '../../common/interfaces'

const ContactList: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { contacts, totalPages } = useAppSelector(state => state.contact)

    useEffect(() => {
        dispatch(getContactsAction())
    }, [dispatch])

    const nextPage = (event: ChangeEvent<any>, page: number): void => {
        dispatch(getContactsAction(page))
    }

    return (
        <Container sx={{ marginTop: 5 }}>
            <Grid container item mb={2}>
                <Button
                    size="medium"
                    variant="contained"
                    component={Link}
                    to="contacts/add"
                >
                    Add Contact
                </Button>
            </Grid>
            <Grid
                container
                direction="row"
                columnSpacing={2}
                rowSpacing={2}
                justifyContent="center"
            >
                {
                    contacts.length > 0 ?
                        (contacts.map(contact => {
                            return (
                                <Grid item xs={12} sm={6} lg={3} key={contact._id}>
                                    <ContactCard
                                        _id={contact._id}
                                        firstName={contact.firstName}
                                        lastName={contact.lastName}
                                        email={contact.email}
                                        phone={contact.phone}
                                    />
                                </Grid>
                            )
                        }))
                        :
                        (
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        )
                }
            </Grid>
            <Grid container mt={4} direction="column" alignItems="center">
                <Stack spacing={2}>
                    <Pagination count={totalPages} color="primary" onChange={nextPage} />
                </Stack>
            </Grid>
        </Container>
    )
}

export default ContactList