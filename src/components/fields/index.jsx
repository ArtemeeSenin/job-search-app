import React from 'react'

export const Text = props => {
    const { label, placeholder, input, type, meta } = props
    return (
        <div className="text-input">
            <label className="text-input__label">
                { label }
                <input
                    {...input}
                    type={ type }
                    className="text-input__field"
                    placeholder={ placeholder }
                />
                {( meta.error && meta.touched && !meta.active ) && (
                    <span className="text-input__message">{ meta.error }</span>
                )}
            </label>
        </div>
    )
}