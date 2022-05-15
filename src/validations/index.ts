import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    age: Yup.number().positive().integer().required('Age is required'),
});