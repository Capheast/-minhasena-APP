import React from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import {CapText} from '../../../components/ui';
import {MSButton} from "../MSButton";

export const ConfigurationModal = ({isVisible, toggle}) => (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={toggle}
        style={{background: "#000"}}>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.8)'
        }}>
            <View style={{
                width: 300,
                height: 300,
                backgroundColor: 'rgba(255,255,255, 0.9)'
            }}>
                <CapText bold big>Configuraçoes do Jogo</CapText>

                <CapText medium>Quantidade de Números</CapText>
                <TouchableHighlight onPress={toggle}>
                    <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={toggle}>
                    <Text>Aplicar</Text>
                </TouchableHighlight>
                <MSButton onPress={toggle} title={"APLICAR"}/>
            </View>
        </View>
    </Modal>
);