import React, { Component, useState } from 'react';
import { useSpeechRecognition } from "react-speech-kit"

export default function UseSpeechRecognition() {
    const [ result, setResult ] = useState()
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: result => setResult(result)
    })

    return (
            <div className="section">
                <div className="section-head">
                    Use Speech Recognition - Demo
                </div>
                <div className="section-body">
                <div>
                  <div>
                    {listening ? "Speak, I'm listening" : ""}
                    <textarea placholder="Your words will appear here..." value={result} />
                    </div>
                    <button onClick={listen}>Listen</button>
                    <button onClick={stop}>Stop</button>
                </div>
                </div>
            </div>
    )
}
