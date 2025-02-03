import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../services/auth";


export default function Intro() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-3">
        Intro dulu🤫
      <button onClick={handleLogout}>Logout</button>
      </h2>
      <p className="text-md mb-4">
        Dokumentasi ini dibuat berdasarkan pengalaman karyawan divisi IT Support PT. Muara Toba Persada, beberapa perspektif yang utama dalam informasi, dan Tips yang akan membantu untuk karyawan baru sebagai IT Support disini.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-medium mb-2">Informasi 🌐</h3>
          <p>Tentang Authentikasi keseluruhan, username yang dirahasiakan, email bisnis, password wifi, mikrotik login, kemudian beberapa email khusus IT, email khusus admin, informasi mengenai infrastruktur jaringan aktif, dan lain-lainnya.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-medium mb-2">Tips & Trick 🛠</h3>
          <p>
            Berisi tentang pemahaman penting dan praktik terbaik tentang cara menangani suatu masalah pekerjaan yang sering ditemukan oleh IT Sebelumnya. Jangan khawatir ini hanya memerlukan sedikit pengetahuan tentang Jaringan dan Sistem Operasi.
          </p>
        </div>
      </div>
    </div>
  );
}
