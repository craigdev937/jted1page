import React from "react";
import { Navbar } from "../components/Navbar";
import { Home } from "../home/Home";
import { Action } from "../action/Action";
import { Form } from "./Form";

export const Main = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Home />
            <Action />
            <Form />
        </React.Fragment>
    );
};


