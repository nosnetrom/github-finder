import React from 'react';
import {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
    const {alert} = useContext(AlertContext);

    return alert !== null && (
        <div className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && (
                <svg width="20" height="20">
                <g stroke="#d40000" stroke-width="2.23"><circle fill="#dfdfdf" cx="10" cy="10" r="8.5652"/>
                <path d="M10,4.188V12.657M10,13.438V15.813"/></g>
                </svg>
            )}
            <p className="flex-1 text-base font-semibold leading-7 text-white">
                Please enter a search value!
            </p>
        </div>
    );
}

export default Alert