import React from 'react'
import { Field } from 'redux-form'
import capitalize from 'capitalize'
import cx from 'classnames'
import {
    requiredRadio
} from '../validation'

export const Text = props => {
    const { label, placeholder, input, inputModifiers, type, meta } = props
    return (
        <div className={cx(
            'text-input',
            {'text-input--error': (meta.error && meta.touched && !meta.active)}
        )}>
            <label className="text-input__label">
                { label }
                <input
                    {...input}
                    type={ type }
                    className={`text-input__field ${inputModifiers}`}
                    placeholder={ placeholder }
                />
                <span className="text-input__message">{ meta.error ? meta.error : '' }</span>
            </label>
        </div>
    )
}

export const Textarea = props => {
    const { label, placeholder, rows, cols, input, inputModifiers, meta } = props;

    return (
        <div className={cx(
            'text-input',
            { 'text-input--error': (meta.error && meta.touched && !meta.active) }
        )}>
            <label className="text-input__label">
                { label }
                <textarea
                    {...input}
                    rows={ rows }
                    cols={ cols }
                    className={`text-input__field ${ inputModifiers }`}
                    placeholder={ placeholder }
                ></textarea>
                <span className="text-input__message">{meta.error ? meta.error : ''}</span>
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
    const { label, radioName, meta } = props;
    const list = props.fields;
    return (
        <div className={cx(
            'text-input',
            'text-input--radio',
            { 'text-input--error': (meta.error && meta.submitFailed && !meta.active) }
        )}>
            <p className="text-input__name">{ label }</p>
            {list.map( (field, key) => (
                <Field
                    type="radio"
                    name={radioName}
                    value={field}
                    component={RadioButton}
                    key={key}
                    validate={[requiredRadio]}
                />
            ))}
            <span className="text-input__message">{meta.error ? meta.error : ''}</span>
        </div>
    )
}

export const FilterCheckbox = props => {
    const { input, label, type, modifier } = props;

    return (
        <li className="rating-filters__dropdown-list-item">
            <label className={`rating-filters__filter rating-filters__filter--${ modifier }`}>
                <input
                    {...input}
                    type={type}
                    className="rating-filters__checkbox"
                />
                <i className="rating-filters__filter-icon fal"></i>
                <span>{ label }</span>
            </label>
        </li>
    )
}

export const Search = props => {
    const { input } = props;
    return (
        <input
            {...input}
            type="text"
            className="rating-filters__search-line-input"
            placeholder="Start search"
        />
    )
}