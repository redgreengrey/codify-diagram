'use client';
import style from './dropdown.module.css';
import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();
    const itemRef = useRef();

    const handleOutsideClick = (e) => {
        if (e.target.contains(dropdownRef.current)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={style.wrapper}>
            <button onClick={() => setIsOpen(!isOpen)} className={style.btnToggle}>
                <div className={style.current}>{value}</div>
                {!isOpen
                    ? <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 2L14 14L2 2" stroke="#000AFF" strokeWidth="3" strokeLinecap="round"/>
                    </svg>

                    : <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 15L14 3L2 15" stroke="#000AFF" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                }
            </button>
            {isOpen && (
                <div ref={itemRef} className={style.list}>
                    {options.map((opt, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                onChange(opt);
                                setIsOpen(false);
                            }}
                            className={`${style.listItem}`}
                            style={{ display: opt === value ? "none" : "block" }}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;