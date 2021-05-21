import { royalblue } from 'color-name';
import * as yup from 'yup';

const userSchema = yup.object().shape({
    correo: yup.string().email().required(),
    password: yup.string().min(7).max(20).required(),
    rol: yup.string().required()
})

export default userSchema;