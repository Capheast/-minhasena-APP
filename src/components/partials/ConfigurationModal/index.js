import React from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import {CapText} from '../../../components/ui';
import {MSButton} from "../MSButton";

export const ConfigurationModal = ({isVisible, toggle, header, content, footer}) => (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={toggle}>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.8)'
        }}>
            <View style={{
                width: 304,
                height: 454,
                backgroundColor: 'rgba(255,255,255, 0.9)',
                borderRadius: 8
            }}>
                <View style={{padding: 16}}>
                    <CapText bold big>Configuraçoes do Jogo</CapText>
                    <CapText medium>Quantidade de Números</CapText>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 350,
                        justifyContent: 'space-between',
                    }}>
                        <MSButton onPress={toggle} title={"APLICAR"}/>
                        <MSButton onPress={toggle} title={"CANCELAR"}/>
                    </View>
                </View>
            </View>
        </View>
    </Modal>
);