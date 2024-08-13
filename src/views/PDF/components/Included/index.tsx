import { Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  table: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F2F2F2',
  },
  service: {
    fontSize: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#F2F2F2'
  },
  equipments: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  }
})

export function Included() {
  return (
    <Page break>
      <View style={styles.container}>
        <Text>Cronograma do projeto</Text>
        <View style={styles.table}>
          <View style={styles.service}>
            <Text>Encomenda dos equipamentos</Text>
            <Text>24 dias</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.service}>
            <Text>Encomenda dos equipamentos</Text>
            <Text>24 dias</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.service}>
            <Text>Encomenda dos equipamentos</Text>
            <Text>24 dias</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.service}>
            <Text>Encomenda dos equipamentos</Text>
            <Text>24 dias</Text>
          </View>
        </View>


        <Text>Cronograma do projeto</Text>
        <View style={styles.equipments}>
          {Array.from({ length: 5 }).map((_, index) => (
            <View style={styles.service} key={index}>
              <Text>Cabo C/C - Unipolar flexível NH 6 mm² - Vermelho</Text>
              <Text>13 un</Text>
            </View>
          ))}
        </View>

        <Text>Os serviços inclusos na sua proposta:</Text>
        <View style={styles.table}>
          <View style={styles.service}>
            <Text>Transporte</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.service}>
            <Text>Mão de obra</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.service}>
            <Text>Margem</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.service}>
            <Text>Margem de representante</Text>
          </View>
        </View>

      </View>
    </Page>
  )
}

// tabela separada por linha

// fazer teste de tabela, renderizando com internet/pc lento