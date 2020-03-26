import React, { Component } from 'react';
import { useIdb } from "react-use-idb"

export default function UseIdb() {
    const [ user, setUser ] = useIdb("user", { name: "nnamdi", age: 27 })

    return (
            <div className="section">
                <div className="section-head">
                  useIdb - Demo
                </div>
                <div className="section-body">
                  <div> 
                      IndexedDB: "user"
                      <div>Name: {user.name}</div>
                      <div>Age: {user.age}</div>
                  </div>
                  <button onClick={() => setUser({...user, age: 26})}>Set Age</button>                
                  <button onClick={() => setUser({...user, name: "chidume"})}>Set Name</button>                
                </div>
            </div>
    )
}
