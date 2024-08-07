import Texto from '../../../component/texto';
import Botao from '../../../component/Botao';

import { Image, StyleSheet, View } from 'react-native';

export default function Detalhes({ nome, nomeFazenda, logoFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>

        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <Botao texto={botao} style={estilos.botao} onPress={() => { }} />
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,

    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 20,
        lineHeight: 26,

    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },
})