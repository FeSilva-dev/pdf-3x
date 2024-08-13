import { createElement } from 'react';
import { pdf } from '@react-pdf/renderer'
import { QuotationPdf } from '../views/PDF'

export const renderPDF = async () => {
  return pdf(createElement(QuotationPdf)).toBlob();
};
