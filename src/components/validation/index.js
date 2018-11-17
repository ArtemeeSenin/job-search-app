export const required = value =>
    value ? undefined : 'Value is required'

export const requiredRadio = (value, allValues) => {
    return allValues.status ? undefined : 'Value is required'
}

export const matchesPassword = (value, allValues) =>
    value === allValues.password
        ? undefined
        : 'Passwords must match'

export const isEmail = value => {
    const regEmail = /^\S+@\S+\.\S+$/i;
    return regEmail.test(value) ? undefined : 'Not a valid email';
}