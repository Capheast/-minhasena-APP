/* @flow */
import React from 'react';
import { Modal as RNModal } from 'react-native';

type Props = {
  isVisible?: boolean,
  onClose: Function,
};

const Modal = ({ isVisible, onClose }: Props) => (
  <RNModal visible={isVisible} onRequestClose={onClose} />
);

Modal.defaultProps = {
  isVisible: false,
};

export default Modal;
