export const required = value =>
    value ? undefined : 'Value is required'

export const requiredRadio = (value, allValues) => {
    return allValues.status ? undefined : 'Value is required'
}