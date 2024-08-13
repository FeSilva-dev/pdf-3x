import { Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import ConstructImage from '../../assets/image.png'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  about: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  logo: {
    maxWidth: 120,
    maxHeight: 80
  },
  title: {
    fontSize: 24
  },
  description: {
    marginTop: 20,
    fontSize: 10,
    fontWeight: 'light',
    width: 360,
    lineHeight: 1.8,
  },
  imagesLine: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    width: 116,
    height: 95,
  }
});

export function ConstructionImages() {
  return (
    <Page break>
      <View style={styles.container}>
        <View style={styles.about}>
          <Image style={styles.logo} src={ConstructImage} />
          <View>
            <Text style={styles.title}>Sobre nós</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed suscipit nibh dui, et tincidunt diam gravida a. In dolor urna,
              imperdiet ut posuere nec, hendrerit nec nunc. Quisque risus orci,
              placerat id velit pellentesque, interdum ultrices est. Morbi est magna,
              tempor suscipit scelerisque eu, faucibus dignissim ligula. Fusce ipsum neque,
              porta ac consectetur quis, posuere in ipsum. Proin id convallis felis.
              Sed scelerisque interdum ullamcorper. 
            </Text>
          </View>
        </View>
        <View style={styles.imagesLine}>
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
        </View>
        <View style={styles.imagesLine}>
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
        </View>
        <View style={styles.imagesLine}>
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
        </View>
        <View style={styles.imagesLine}>
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
          <Image
            src={ConstructImage}
            style={styles.image}
          />
        </View>
      </View>
    </Page>
  )
}