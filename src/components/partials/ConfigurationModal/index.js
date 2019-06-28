import React from 'react';
import {
  Modal, Text, TouchableHighlight, View
} from 'react-native';

export const ConfigurationModal = ({ isVisible, closeModal }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={isVisible}
    presentationStyle="formSheet"
    onRequestClose={closeModal}
    style={{}}
  >
    <View style={{
      marginTop: 90,
      paddingHorizontal: 30,
      background: '#0000001A'
    }}
    >
      <View>
        <Text>Total de números</Text>
        <TouchableHighlight onPress={closeModal}>
          <Text>Aplicar</Text>
        </TouchableHighlight>
      </View>
    </View>
  </Modal>
);
