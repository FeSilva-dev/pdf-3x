import { Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import ChartJsImage from "chartjs-to-image";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  bordered: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F2F2F2',
  },
  returnCard: {
    fontSize: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 4,
    width: '50%'
  },
  border: {
    borderLeft: 1,
    borderColor: '#F2F2F2'
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#F2F2F2'
  },
  table: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  head: {
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'medium',
  },
  row: {
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'light',
  },
  chartContainer: {
    padding: 5,
  }
})

const labels = [1, 5, 10, 15, 20, 25];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Potencia',
      data: [30, 35, 50, 60, 40, 80, 70],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'transparent'
    },
  ],
};

export function ROI() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  async function getChartImage() {
    const myChart = new ChartJsImage();
    myChart.setConfig({
      type: 'line',
      data,
      options: {
        maintainAspectRatio: false,
        drawOnChartArea: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
          yAxes: [{
            display: false,
          }]
        },
      }
    }).setHeight(150);

    setImageSrc(myChart.getUrl())
  }

  useEffect(() => {
    getChartImage()
  }, [])

  return (
    <Page break>
      <View style={styles.container}>
        <Text>Retorno do seu investimento</Text>
        <View style={styles.bordered}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={styles.returnCard}>
              <Text>Tenha seu retorno em</Text>
              <Text>24 dias</Text>
            </View>
            <View style={{ ...styles.returnCard, ...styles.border }}>
              <Text>Em 30 anos você economiza</Text>
              <Text>R$ 280.210,70</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={styles.returnCard}>
              <Text>Tenha seu retorno em</Text>
              <Text>24 dias</Text>
            </View>
            <View style={{ ...styles.returnCard, ...styles.border }}>
              <Text>Em 30 anos você economiza</Text>
              <Text>R$ 280.210,70</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.chartContainer}>
            <Image src={imageSrc} />
          </View>
          <View style={styles.separator} />
          <View style={styles.table}>
            <View style={styles.head}>
              <Text>Mês</Text>
              <Text>Consumo inicial</Text>
              <Text>Consumo projetado</Text>
              <Text>Produção</Text>
              <Text>Delta</Text>
            </View>

            {Array.from({ length: 12 }).map((_, index) => (
              <View style={styles.row} key={index}>
                <Text>Janeiro</Text>
                <Text>20 kWh</Text>
                <Text>25 kWh</Text>
                <Text>30 kWh</Text>
                <Text>+ 2 kWh</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  )
}