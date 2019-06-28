import React from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

export const ConfigurationModal = ({isVisible, toogle}) => (
    <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={toogle}
        style={{}}>
        <View style={{marginTop: 90, paddingHorizontal: 30, background: '#0000001A'}}>
            <View>
                <Text>Total de números</Text>
                <TouchableHighlight onPress={toogle}>
                    <Text>Aplicar</Text>
                </TouchableHighlight>
            </View>
        </View>
    </Modal>
);