import React from "react";
//import { InputIcon } from '../input-icon';
import Styles from './styles.module.css';

type Props = {
  label: string;
  placeholder: string;
  type: string;
}

export function InputText({ ...props }: Props) {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.icon}>
          
        </div>
        <div className="grow">
          <label className={Styles.label}>
            {props.label}
          </label>
          <input
            type={props.type}
            placeholder={props.placeholder}
            className={Styles.input}
          />
        </div>

      </div>
    </>

  )
}