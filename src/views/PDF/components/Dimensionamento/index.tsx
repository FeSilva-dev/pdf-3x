import { Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import ChartJsImage from 'chartjs-to-image';
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  infosWraper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  infos: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  info: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    textAlign: 'center',
    width: '33.3%'
  },
  title: {
    fontSize: 8,
    fontWeight: 'normal'
  },
  description: {
    fontSize: 10
  },
  chart: {
    height: 230,
  },
  table: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F2F2F2',
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
  }
})


const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Potencia',
      data: [30, 35, 50, 60, 40, 80, 70],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'KWP',
      data: [50, 45, 30, 55, 30, 50, 90],
      backgroundColor: 'rgb(251, 190, 58)',
    },
  ],
};

export function DimensioningInfos() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  async function getChartImage() {
    const myChart = new ChartJsImage();
    myChart.setConfig({
      type: 'bar',
      data,
      options: {
        maintainAspectRatio: false,
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
            ticks: {
              beginAtZero: true,
              min: 0,
            }
          }]
        },
      }
    });

    setImageSrc(myChart.getUrl())
  }

  useEffect(() => {
    getChartImage()
  }, [])

  return (
    <Page break>
      <View style={styles.container}>
        <View style={styles.infosWraper}>
          <Text>Dados do dimensionamento do seu sistema</Text>
          <View style={styles.infos}>
            <View style={styles.info}>
              <Text style={styles.title}>Potência</Text>
              <Text style={styles.description}>14 kWp</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Potência</Text>
              <Text style={styles.description}>14 kWp</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Potência</Text>
              <Text style={styles.description}>14 kWp</Text>
            </View>
          </View>
          <View style={styles.infos}>
            <View style={styles.info}>
              <Text style={styles.title}>Potência</Text>
              <Text style={styles.description}>14 kWp</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Potência</Text>
              <Text style={styles.description}>14 kWp</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Potência</Text>
              <Text style={styles.description}>14 kWp</Text>
            </View>
          </View>
        </View>

        <View>
          <Image style={styles.chart} src={imageSrc} />
        </View>

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
    </Page>
  )
}