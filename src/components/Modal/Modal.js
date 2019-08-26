import React from 'react';
import { Modal as RNModal } from 'react-native';
import PropTypes from 'prop-types';

const Modal = ({ isVisible, onClose }) => <RNModal visible={isVisible} onRequestClose={onClose} />;

Modal.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  isVisible: false,
  onClose: () => {}
};

export default Modal;
