import { QuotationPdf } from './views/PDF'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { useRenderPDF } from './hooks/useRenderPdf';

export function App() {
  const { onRender } = useRenderPDF();

  return (
    <>
      <PDFViewer>
        <QuotationPdf />
      </PDFViewer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start'}}>
        <PDFDownloadLink
          document={<QuotationPdf />}
          fileName="testebomdia.pdf"
        >
          <button>Baixar PDF</button>
        </PDFDownloadLink>
        <button type="button" onClick={onRender}>
          Baixar PDF 3x
        </button>
        <button onClick={() => console.log('ooiiiii')}>Thread</button>
      </div>
    </>
  )
}