import React, { Component } from 'react';
import { useLocalStorage } from "@rehooks/local-storage"

export default function UseLocalStorage() {
    const [ name, setName, deleteName ] = useLocalStorage("name")

    return (
            <div className="section">
                <div className="section-head">
                  Use Local Storage - Demo
                </div>
                <div className="section-body">
                <div>
                    <div>Key: "name" | Value: "{name}"</div>
                    <div>
                        <button onClick={ ()=> setName("nnamdi")}>Set Name</button>
                        <button onClick={deleteName}>Delete Value</button>
                    </div>
                </div>

                </div>
            </div>

    )
}
