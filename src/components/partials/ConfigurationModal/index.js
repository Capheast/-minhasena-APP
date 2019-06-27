import React, {useState} from 'react';
import {Alert, Modal, Text, TouchableHighlight, View} from 'react-native';

export const ConfigurationModal = ({isVisible = false}) => {

    const [modalVisible, setModalVisible] = useState(isVisible);

    function closeModal() {
        isVisible = false;
    }

    return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}
                onRequestClose={closeModal}
                style={{}}>
                <View style={{marginTop: 90, paddingHorizontal: 30, background: '#0000001A'}}>
                    <View>
                        <Text>Total de números</Text>

                        <TouchableHighlight>
                            <Text>Aplicar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
    );
}