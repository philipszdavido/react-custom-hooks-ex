import React, { Component, useState } from 'react';
import useDocumentTitle from "@rehooks/document-title"

export default function UseDocumentTitle() {
    const [title, setTitle] = useState("Component Page")
    useDocumentTitle(title)

    return (
            <div className="section">
                <div className="section-head">
                  Use Document Title - Demo
                </div>
                <div className="section-body">
                  <button onClick={()=> setTitle("Nnamdi")}>Set Document Title to "Nnamdi"</button>
                  <button onClick={()=> setTitle("Component Page")}>Reset</button>
                </div>
            </div>
    )
}
