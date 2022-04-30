import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IFormContact } from '../../common/interfaces'
import { addContactSchema } from '../../common/schemas'

import {
    Grid,
    Box,
    Container,
    TextField,
    Card,
    CardContent,
    Typography,
    Button
} from '@mui/material'

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'

import { addContactAction } from '../../redux/contactActions'
import { useAppDispatch } from '../../hooks/toolkit'

const ContactAdd: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<IFormContact>({
        resolver: yupResolver(addContactSchema)
    })

    const saveContact: SubmitHandler<IFormContact> = (values): void => {

        const newContact = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
        }

        dispatch(addContactAction(newContact))
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
                            Add New Contact
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
                                onClick={handleSubmit(saveContact)}
                            >
                                Save Contact
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ContactAdd