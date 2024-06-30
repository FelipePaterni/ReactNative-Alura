
import topoImg from '../../../../assets/topo.png'
import Texto from '../../../component/texto'
import { Image, StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width;

export default function Topos({ titulo }) {
    return <>
        <Image source={topoImg} style={estilos.topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 * width) / 768,

    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,

    },
})