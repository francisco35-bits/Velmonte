  function loadPDF(pdfUrl, containerId) {
    const container = document.getElementById(containerId);
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise.then(pdf => {
      pdf.getPage(1).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        container.appendChild(canvas);

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    loadPDF('ruta-del-contrato-1.pdf', 'pdf-viewer-1');
    // Repite para otros contratos
  });