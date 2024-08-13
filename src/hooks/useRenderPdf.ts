import { wrap } from 'comlink';
import type { WorkerType } from '../workers/pdf.worker';
import Worker from '../workers/pdf.worker?worker';
import { saveAs } from 'file-saver'

export const pdfWorker = wrap<WorkerType>(new Worker());

export const useRenderPDF = () => {
  async function onRender() {
    for (let i = 0; i <= 5; i++) {
      const blob = await pdfWorker.renderPDFInWorker();
      saveAs(blob, `Quotation_${i}.pdf`);
    }
  }

  return { onRender }
};
