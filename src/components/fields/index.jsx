import React from 'react'
import { Field } from 'redux-form'
import capitalize from 'capitalize'
import { list } from 'postcss';

export const Text = props => {
    const { label, placeholder, input, inputModifiers, type, meta } = props
    return (
        <div className="text-input">
            <label className="text-input__label">
                { label }
                <input
                    {...input}
                    type={ type }
                    className={`text-input__field ${inputModifiers}`}
                    placeholder={ placeholder }
                />
                {( meta.error && meta.touched && !meta.active ) && (
                    <span className="text-input__message">{ meta.error }</span>
                )}
            </label>
        </div>
    )
}

export const Textarea = props => {
    const { label, placeholder, rows, cols, input, inputModifiers, meta } = props;
    return (
        <div className="text-input">
            <label className="text-input__label">
                { label }
                <textarea
                    {...input}
                    rows={ rows }
                    cols={ cols }
                    className={`text-input__field ${ inputModifiers }`}
                    placeholder={ placeholder }
                ></textarea>
                {(meta.error && meta.touched && !meta.active) && (
                    <span className="text-input__message">{meta.error}</span>
                )}
            </label>
        </div>
    )
}

export const Checkbox = props => {
    const { label, input, inputModifiers, type } = props
    return (
        <div className="text-input text-input--checkbox">
            <label className="text-input__label text-input__label--checkbox">
                <input
                    {...input}
                    type={ type }
                    className={`text-input__field ${inputModifiers}`}
                />
                <i className="text-input__field-icon fal"></i>
                <span>{ label }</span>
            </label>
        </div>
    )
}
const RadioButton = props => {
    const { input, type, key } = props;
    return (
        <label className="text-input__label text-input__label" key={key}>
            <input
                {...input}
                type={type}
                className="text-input__field"
            />
            <i className="text-input__field-icon fal fa-dot-circle"></i>
            <span>{ capitalize(input.value) }</span>
        </label>
    )
}

export const Radio = props => {
    const { label, name, list } = props;
    return (
        <div className="text-input text-input--radio">
            <p className="text-input__name">{ label }</p>
            {list.map( (field, key) => (
                <Field
                    type="radio"
                    name={name}
                    value={field}
                    component={RadioButton}
                    key={key}
                />
            ))}

        </div>
    )
}