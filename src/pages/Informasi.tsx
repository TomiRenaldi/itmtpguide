import DownloadButton from "../components/DownloadButton";

export default function Informasi() {
  return (
    <div className="max-w-3xl mx-auto left-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Informasi</h2>
      <p className="text-lg mb-4 font-bold">
        Berikut list-cheat authentikasi pada setiap perangkat disini:
      </p>
      <ol className="list-decimal list-outside">
        <li className="">RouterOS Winbox <span>(64bit)</span> (Mikrotik RB1100AHx2)</li>
        <p>IP : <span className="font-bold">itmtp@192.168.10.1</span></p>
        <p>Username: <span className="font-bold underline">itmtp</span></p>
        <p>Password: <span className="font-bold underline">2102</span></p>
        
        <li className="mt-5">ElastiX <span>IP PBX</span></li>
        <p>IP : <span className="font-bold">192.168.88.2</span></p>
        <p>Username: <span className="font-bold underline">admin</span></p>
        <p>Password: <span className="font-bold underline">111111</span></p>
        In system linux (and for FTP)
        <p>Username: <span className="font-bold underline">root</span></p>
        <p>Password: <span className="font-bold underline">111111</span>
        </p>
        <li className="mt-5">OpenVox Login<span></span></li>
        <p>IP: <span className="font-bold">192.168.88.3</span></p>
        <p>Username: <span className="font-bold">admin</span></p>
        <p>Password: <span className="font-bold">admin</span></p>
        <DownloadButton fileName="catatan.docx" fileUrl="/documents/catatan.docx"></DownloadButton>

        <li className="mt-5">Router indihome <span>ISP (1) 192.168.88.1</span></li>
        <p>Username: <span className="font-bold underline">admin</span></p>
        <p>Password: <span className="font-bold underline">mtp123</span></p>

        <li className="mt-5">Router indihome <span>ISP (2) 192.168.100.1</span></li>
        <p>Username: <span className="font-bold underline">admin</span></p>
        <p>Password: <span className="font-bold underline">admin</span></p>

        <li className="mt-5">CCTV DAHUA in DVR</li>
        <p>Username: <span className="font-bold underline">admin</span></p>
        <p>Password: <span className="font-bold underline">admin123</span></p>

        <li className="mt-5">Email Google Workspace</li>
        <p>Username: <span className="font-bold underline">admin@muaratobapersada.com</span></p>
        <p>Password: <span className="font-bold underline">persada2102</span></p>

        <li className="mt-5">Email VIP IT / Adm</li>
        <p>Username: <span className="font-bold underline">mtpvipadm@gmail.com</span></p>
        <p>Password: <span className="font-bold underline">MuaraTobaPersada</span></p>

        <li className="mt-5">Email Khusus</li>
        <p>Username: <span className="font-bold underline">shchokidar7a@gmail.com</span></p>
        <p>Password: <span className="font-bold underline">jonjon1122B</span></p>

        <li className="mt-5">ClientZone Rumah Web (admin@muaratobapersada.com)</li>
        <p>Username: <span className="font-bold underline">shchokidar7a@gmail.com</span></p>
        <p>Password: <span className="font-bold underline">jonjon1122B, / jonjon1122B. / jonjon1122B</span></p>
      </ol>
    </div>
  );
}
