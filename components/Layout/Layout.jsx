import React, { Fragment } from "react";
import NextHead from "next/head";

export default function Layout ({title, children}) {
    return (
        <Fragment>
            <NextHead>
                <title>{title}</title>
            </NextHead>
            <main>
                {children}
            </main>
        </Fragment>
    );
}