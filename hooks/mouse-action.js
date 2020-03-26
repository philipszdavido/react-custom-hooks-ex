import React, { Component, useState } from 'react';
import { useMouseAction, useMouseDown, useMouseUp } from "use-mouse-action"

export default function MouseAction() {
    const [action, setAction] = useState("No Action yet")
    const mouseActionProps = useMouseAction({
        onAction: () => setAction("Mouse clicked")
    })

    const mouseDownProps = useMouseDown(() => setAction("Mouse down"))

    const mouseUpProps = useMouseUp(() => setAction("Mouse up"))

    return (
            <div className="section">
                <div className="section-head">
                  Mouse Action - Demo
                </div>
                <div className="section-body">
                <div>Action: {action}</div>
            <button {...mouseActionProps}>Mouse Action</button>
            <button {...mouseDownProps}>Mouse Down</button>
            <button {...mouseUpProps}>Mouse Up</button>
            </div>
          </div>
    )    
}