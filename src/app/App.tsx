import React from "react";
import "./App.css";
import { Navbar } from "../components/Navbar";
import { Form } from "../containers/Form";

export const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Form />
        </React.Fragment>
    );
};



