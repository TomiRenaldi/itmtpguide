import { useState } from "react";

const DownloadButton = ({ fileUrl, fileName }: { fileUrl: string; fileName: string }) => {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeModal(); // Tutup modal setelah unduhan dimulai
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 300); // Sesuai dengan durasi animasi
  };

  return (
    <div>
      {/* Tombol utama */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 hover:bg-blue-900 text-white px-2 py-1 mt-3 rounded-lg shadow-md transition-all"
      >
        Unduh & Pelajari Selengkapnya
      </button>

      {/* Modal Konfirmasi dengan Blur Background */}
      {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-opacity-10 backdrop-blur-xs transition-opacity duration-300 
                      ${isClosing ? "opacity-0" : "opacity-100"}`}
        >
          <div
            className={`bg-white p-5 rounded-lg shadow-xl w-90 transform transition-transform duration-300 
                        ${isClosing ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
          >
            <h3 className="text-xl font-semibold mb-4 text-black">Konfirmasi Unduhan</h3>
            <p className="text-black mb-6">Apakah Anda yakin ingin mengunduh dokumen ini?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-3 py-1 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Batal
              </button>
              <button
                onClick={handleDownload}
                className="px-3 py-1 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Ya, Unduh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
