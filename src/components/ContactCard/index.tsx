import { FC } from 'react'
import { Link } from 'react-router-dom'

import {
    Card,
    CardContent,
    Button,
    Typography
} from '@mui/material'

import { Contact } from '../../common/interfaces'

const ContactCard: FC<Contact> = ({ _id, firstName, lastName, email, phone }): JSX.Element => {
    return (
        <Card sx={{ height: 180 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {phone}
                </Typography>
                <Typography variant="h5" component="div">
                    {`${firstName} ${lastName}`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {email}
                </Typography>
                <Button
                    size="small"
                    component={Link}
                    to={`contacts/${_id}`}
                >
                    View Contact
                </Button>
            </CardContent>
        </Card>
    )
}

export default ContactCard