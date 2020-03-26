import React, { Component } from 'react';
import { useSpeechSynthesis } from "react-speech-kit"

export default function UseSpeechSynthesis() {
    const ref = React.useRef()
    const { speak } = useSpeechSynthesis()

    return (
            <div className="section">
                <div className="section-head">
                    Use Speech Synthesis - Demo
                </div>
                <div className="section-body">
                <div>                
                    <input type="text" placeholder="Type to speak..." ref={ref} />
                </div>
                <div>                
                    <button onClick={() => speak({text: ref.current.value})}>Speak</button>
                </div>                

                </div>
            </div>

    )
}
