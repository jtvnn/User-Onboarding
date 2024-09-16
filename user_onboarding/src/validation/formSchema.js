import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(3, 'Username must be 3 characters long'),
    email: yup
    .string()
    .trim()
    .email('Must be a valid email address')
    .required('Email is required'),
    password: yup
    .string()
    .trim()
    .required('Password is required'),
    terms: yup
    .boolean()
    
})

export default formSchema