import React, { ComponentType } from 'react';
import { HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { StyledComponent } from 'styled-components';
import { Edit } from './EditableWrapper.styled';

interface IProps {
  Child: StyledComponent<ComponentType<HTMLMotionProps<any>>, any, {}, never>;
  text: string;
  onChange: (text: string) => void;
}

const EditableWrapper = ({ Child, text, onChange }: IProps) => {
  return (
    <Child initial={{ x: -50 }} animate={{ x: 0 }} exit={{ x: 50 }} layout>
      {text}
      <Edit
        onClick={(e) => {
          e.preventDefault();
          const newName = prompt('Enter new name') || '';

          if (newName.length > 0) {
            onChange(newName);
          }
        }}
      >
        &#9998;
      </Edit>
    </Child>
  );
};

export default EditableWrapper;
