export const required = value =>
    value ? undefined : 'Value is required'

export const requiredRadio = (value, allValues) => {
    return allValues.status ? undefined : 'Value is required'
}

export const matchesPassword = (value, allValues) =>
    value === allValues.password
        ? undefined
        : 'Passwords must match'

export const strongPassword = (value) =>
    value.length >= 6
        ? undefined
        : 'Password must be at least 6 characters'

export const isEmail = value => {
    const regEmail = /^\S+@\S+\.\S+$/i;
    return regEmail.test(value) ? undefined : 'Not a valid email';
}