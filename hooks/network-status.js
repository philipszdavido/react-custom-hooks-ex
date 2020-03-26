import React, { Component } from 'react';
import useNetworkStatus from "@rehooks/network-status"

export default function UseNetworkStatus() {
    let connection = useNetworkStatus()

    return (
            <div className="section">
                <div className="section-head">
                    Use Network Status - Demo
                </div>
                <div className="section-body">
                  <div>
                      <div>Network: "{connection.effectiveType ? "Fast" : "Slow"}"</div>
                      <div>Data Saver Mode: "{connection.saveData ? "Yes" : "No" }"</div>
                  </div>
                </div>
            </div>

    )
}
