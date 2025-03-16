import React from "react";


const Field = ({ label, children, HtmlFor, error }) => {
    const id = HtmlFor || getChildId(children);
    return (
        <>
            {/* <label htmlFor={id} className="form-label">{label}</label> */}
            {label && <label htmlFor={id} className="form-label" >{label}</label>}
            {children}
            {!!error && <p className='error'>{error.message}</p>}
        </>
    )
}
const getChildId = (children) => {
    if (!children || React.Children.count(children) !== 1) {
        return null;
    }

    const child = React.Children.only(children);
    if (child?.props?.id) {
        return child.props.id;
    }

    return null;
};
export default Field

