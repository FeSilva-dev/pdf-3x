import { Font, Document } from '@react-pdf/renderer';
import DMSans from '../../fonts/DMSans.ttf'
import DMSansSemiBold from '../../fonts/DMSans_semibold.ttf'
import DMSansBold from '../../fonts/DMSans_bold.ttf'

Font.register({
  family: 'DM Sans',
  fonts: [
    {
      src: DMSans
    },
    {
      fontWeight: 'semibold',
      src: DMSansSemiBold
    },
    {
      fontWeight: 'bold',
      src: DMSansBold
    }
  ]
});

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Cover } from './components/Cover';
import { ConstructionImages } from './components/ConstructionImages';
import { DimensioningInfos } from './components/Dimensionamento';
import { Included } from './components/Included';
import { ROI } from './components/ROI';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export function QuotationPdf() {

  return (
    <Document style={{ fontFamily: 'DM Sans' }}>
      <Cover />
      <ConstructionImages />
      <DimensioningInfos />
      <Included />
      <ROI />
    </Document>
  )
}
