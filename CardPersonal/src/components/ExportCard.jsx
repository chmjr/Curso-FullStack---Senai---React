function ExportCard({ image, fileName, onClose }) {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = fileName;
    link.href = image;
    link.click();
    onClose();
  };

  return (
    <div className="export-card">
      <div className="confirmacao">
        <p>Deseja realmente baixar a imagem?</p>
        <button className="btn" onClick={downloadImage}>Baixar</button>
        <button className="btn" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default ExportCard;
