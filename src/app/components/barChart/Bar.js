import React from "react";
import style from './bar.module.css';

const Bar = ({ x, y, height, width }) => {
    return (
        <>
            <rect x={x} y={y} height={height} width={width} rx='4' className={style["bar-style"]} />
        </>
    );
};

export default Bar;
