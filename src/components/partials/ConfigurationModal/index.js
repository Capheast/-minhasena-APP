import React from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import { CapText, Divider } from '../../../components/ui';

export const ConfigurationModal = ({isVisible, toggle}) => (
    <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={toggle}
        style={{}}>
        <View style={{marginTop: 90, paddingHorizontal: 30, background: '#0000001A'}}>
            <View>
                <CapText bold>Configuraçoes do Jogo</CapText>
                <CapText>Quantidade de Números</CapText>
                <TouchableHighlight onPress={toggle}>
                    <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={toggle}>
                    <Text>Aplicar</Text>
                </TouchableHighlight>

            </View>
        </View>
    </Modal>
);