import React, { Component } from 'react';
import useClippy from "use-clippy"

export default function UseClippy() {
    const [ clipboard, setClipboard ] = useClippy()

    return (

            <div className="section">
                <div className="section-head">
                  Use Clippy - Demo
                </div>
                <div className="section-body">
                <div>
                    <div>Clipboard: {clipboard}</div>

                    <button onClick={() => setClipboard("nnamdi")}>Set Clipboard</button>
                </div>

                </div>
            </div>

    )
}
