import { FC, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IFormContact, IContactEdit } from '../../common/interfaces'
import { addContactSchema } from '../../common/schemas'
import { getContactAction, updateContactAction, deleteContactAction } from '../../redux/contactActions'

import {
    Box,
    Grid,
    Container,
    Button,
    Card,
    CardContent,
    Typography,
    TextField
} from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'

import { useAppDispatch, useAppSelector } from '../../hooks/toolkit'

const ContactDetail: FC = (): JSX.Element => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { contactEdit } = useAppSelector(state => state.contact)

    const { register, handleSubmit, formState: { errors } } = useForm<IContactEdit>({
        resolver: yupResolver(addContactSchema),
        defaultValues: {
            contactId: contactEdit._id,
            firstName: contactEdit.firstName,
            lastName: contactEdit.lastName,
            email: contactEdit.email,
            phone: contactEdit.phone
        }
    })

    useEffect(() => {
        dispatch(getContactAction(id!))
    }, [dispatch, id])

    const updateContact: SubmitHandler<IContactEdit> = (values): void => {
        const contactUpdate = {
            contactId: values.contactId,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone
        }
        dispatch(updateContactAction(contactUpdate))
            .then(response => {
                navigate('/')
            })
    }

    const deleteContact = () => {
        dispatch(deleteContactAction(contactEdit._id))
            .then(response => {
                navigate('/')
            })
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Box>
                <Button
                    size="medium"
                    component={Link}
                    to="/"
                    startIcon={<ArrowBackIosNewOutlinedIcon />}
                >
                    Go Back
                </Button>
            </Box>
            <Card sx={{ p: 2 }}>
                <CardContent>
                    <Box mb={1}>
                        <Typography variant="h5">
                            View/Update Contact
                        </Typography>
                    </Box>
                    <Grid container direction="column" alignItems="center" spacing={4}>
                        <Grid item>
                            <TextField
                                {...register('firstName')}
                                id="standard-basic"
                                label="First Name"
                                variant="standard"
                                error={errors.firstName ? true : false}
                                helperText={errors.firstName?.message}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                {...register('lastName')}
                                id="standard-basic"
                                label="Last Name"
                                variant="standard"
                                error={errors.lastName ? true : false}
                                helperText={errors.lastName?.message}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                {...register('email')}
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                error={errors.email ? true : false}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                {...register('phone')}
                                id="standard-basic"
                                label="Phone"
                                variant="standard"
                                error={errors.phone ? true : false}
                                helperText={errors.phone?.message}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                size="medium"
                                variant="contained"
                                fullWidth
                                onClick={handleSubmit(updateContact)}
                            >
                                Update Contact
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color="error"
                                size="medium"
                                variant="contained"
                                fullWidth
                                onClick={deleteContact}
                            >
                                Delete Contact
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ContactDetail