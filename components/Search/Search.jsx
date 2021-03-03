import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";

export default function Search (props) {

    const {text, setText} = props;

    return (
        <Fragment>
            <TextField
                label="Character Name"
                variant="filled"
                size="small"
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </Fragment>
    );
}