import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  width: 50%;

  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
`;

const Text = styled(motion.p)`
  color: darkgray;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
`;

const Reaction = styled.div`
  font-size: 1.25rem;
  display: inline;
`;

const ReactionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

interface IReactionIcon {
  color: string;
}

const ReactionIcon = styled.span<IReactionIcon>`
  font-size: 1.25rem;
  color: ${({ color }) => color};

  &:hover {
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 1rem;
  background-color: pink;
  border: none;
  color: white;
  padding: 0.5rem;

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

export {
  Container,
  Title,
  Text,
  Row,
  Reaction,
  ReactionWrapper,
  DeleteButton,
  ReactionIcon
};
