import React from "react";
import "./Form.css";

export const Form = () => {
    return (
        <React.Fragment>
            <form className="form">
                <label>First Name:</label>
                <input type="text" />
                <label>Last Name:</label>
                <input type="text" />
                <label>E-mail:</label>
                <input type="email" />
                <label>Phone Number:</label>
                <input type="number" />
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    );
};


