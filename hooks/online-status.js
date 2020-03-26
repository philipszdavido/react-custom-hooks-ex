import React, { Component } from 'react';
import useOnlineStatus from "@rehooks/online-status"

export default function UseOnlineStatus() {
    const online = useOnlineStatus()

    return (
            <div className="section">
                <div className="section-head">
                    Use Online Status - Demo
                </div>
                <div className="section-body">
                  <div>
                      Network: "{online ? "Online" : "Offline"}"
                  </div>
                </div>
            </div>

    )
}
