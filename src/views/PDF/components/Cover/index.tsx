import { Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import CoverImage from '../../assets/cover.png'

const coverStyles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    position: 'relative',
  },
  wrapper: {
    position: 'absolute',
    top: 200,
    left: 40,
    color: 'white'
  },
  image: {
    width: '100%',
    minWidth: '100%',
    minHeight: '100%',
    height: '100%',
  },
  heading: {
    fontSize: 48,
    width: 400,
  },
  description: {
    marginTop: 16,
    display: 'flex',
    gap: 8,
  },
  footer: {
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'red', 
    position: 'absolute',
    bottom: 20,
    left: 40,
  }
});

export function Cover() {
  return (
    <Page style={{ position: 'relative' }} wrap={false} break>
      <Image
        style={coverStyles.image}
        src={CoverImage}
      />
      <View style={coverStyles.wrapper}>
        <Text style={coverStyles.heading}>
          Texto para edição completa e total.
        </Text>
        <View style={coverStyles.description}>
          <Text>Proposta emitida: 01/06/2021</Text>
          <Text>Cliente: Paulo Persona</Text>
          <Text>Rua Dionísio da Costa, 288 - Vila Mariana, SP</Text>
        </View>
      </View>

      <View style={coverStyles.footer}></View>
    </Page>
  )
}