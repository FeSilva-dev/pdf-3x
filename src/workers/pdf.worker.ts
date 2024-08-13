import { expose } from 'comlink';
import './workerShim';

const renderPDFInWorker = async () => {
  const { renderPDF } = await import('../hooks/renderPdf');
  return URL.createObjectURL(await renderPDF());
};

expose({ renderPDFInWorker: renderPDFInWorker });

export type WorkerType = {
  renderPDFInWorker: typeof renderPDFInWorker;
};