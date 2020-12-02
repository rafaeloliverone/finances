import React, { useEffect, useRef, InputHTMLAttributes }  from 'react';

import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container } from './styles';

interface ReactProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}


const Input: React.FC<ReactProps> = ({name, icon: Icon, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField } = useField(name);

  // console.log(icon)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container>
        {Icon && <Icon size={20} />}
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />

      </Container>
    </>
  )

}

export default Input;