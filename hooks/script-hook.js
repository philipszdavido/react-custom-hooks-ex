import React, { Component, useState } from 'react';
import useScript from "react-script-hook"

export default function UseScript() {
  const [loaded, setLoaded] = useState(false)

    const [ loading, error ] = useScript({
        src: 'https://pm28k14qlj.codesandbox.io/test-external-script.js',
        onload: () => setLoaded(true)
    })

    return (
            <div className="section">
                <div className="section-head">
                    Use Script Hook - Demo
                </div>
                <div className="section-body">
                  {loading ? "Script loading" : null}
                  {error ? "Error occured" : null}
                  {loaded ? "Script loaded" : null}
                </div>
            </div>
    )
}
