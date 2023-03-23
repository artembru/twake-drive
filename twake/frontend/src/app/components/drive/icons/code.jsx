/* eslint-disable react/prop-types */
import React from 'react';

const SvgComponent = props => (
  <svg
    width={(props.scale || 1) * 0.75 * 32}
    height={(props.scale || 1) * 0.75 * 32}
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      scale={(props.scale || 1) * 0.75}
      fill={props.fill || '#FFF'}
      d="M10.786 22.646l-.737.738a.462.462 0 0 1-.68 0L2.494 16.51a.461.461 0 0 1 0-.678l6.875-6.876a.472.472 0 0 1 .341-.147c.128 0 .24.05.339.147l.737.738a.472.472 0 0 1 .147.341c0 .127-.05.239-.147.339l-5.798 5.798 5.798 5.798c.097.098.147.212.147.339s-.05.24-.147.337zm8.718-15.741l-5.502 19.048a.472.472 0 0 1-.229.287.415.415 0 0 1-.346.039l-.915-.254a.463.463 0 0 1-.288-.227.437.437 0 0 1-.037-.36l5.503-19.05a.495.495 0 0 1 .227-.288.417.417 0 0 1 .348-.036l.917.25c.128.04.223.115.288.228a.447.447 0 0 1 .034.363zM29.2 16.51l-6.879 6.875c-.097.102-.212.149-.339.149s-.241-.048-.338-.149l-.738-.738a.47.47 0 0 1-.146-.339.47.47 0 0 1 .146-.339l5.798-5.798-5.798-5.798a.474.474 0 0 1-.146-.339c0-.129.049-.242.146-.341l.738-.738a.464.464 0 0 1 .677 0l6.879 6.876a.465.465 0 0 1 0 .679z"
    />
  </svg>
);

export default SvgComponent;
