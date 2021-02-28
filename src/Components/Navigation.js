import React, { useState } from "react";

const Navigation = (props) => {
    return (
        <div className="d-flex justify-content-center p-5">
            <button className="btn btn-primary">Día libre</button>
            <button className="ml-3 btn btn-secondary">Vacaciones</button>
        </div>
    );
};

export default Navigation;
