import styled from 'styled-components';
import { motion } from 'framer-motion';

const Main = styled(motion.main)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddButton = styled(motion.button)`
  background-color: transparent;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: lightgreen;

  &:hover {
    cursor: pointer;
  }
`;

export { Main, AddButton };
