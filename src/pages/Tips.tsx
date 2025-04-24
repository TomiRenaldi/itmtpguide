export default function Tips() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Tips</h2>
      <p className="text-lg mb-4">Praktik dan Saran bag IT:</p>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded-lg shadow">
          <code className="text-sm md:text-base font-mono bg-gray-100 p-1 rounded">
            Perangkat Router Wireless:
          </code>
          <p className="mt-2">
            Penting! agar melakukan reset kembali untuk setiap Router wifi yang
            berjalan di setiap ruangan, ini akan mempermudah pengelolaan
            akselerasi Internet untuk kedepannya.
          </p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow">
          <code className="text-sm md:text-base font-mono bg-gray-100 p-1 rounded">
            Installasi Komputer:
          </code>
          <p className="mt-2">
            Install Windows dan Linux, disarankan untuk membuat Bootable baru
            atau memakai yang sudah ter-install Bootable pada <b>Flashdisk!</b>
          </p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow">
          <code className="text-sm md:text-base font-mono bg-gray-100 p-1 rounded">
            Permasalahan Komputer paling sering:
          </code>
          <p className="mt-2">
            Anda akan menemukan masalah pada Komputer yang paling mudah dan akan
            sangat sering yakni; komponen peripheral Mouse klik kanan tidak
            bekerja, klik kiri Mouse susah ditekan, Keyboard sangat jarang,
            beberapa monitor ada yang ber-umur jadi sering dimatikan saja
            solusinya, dan untuk CPU yang paling sering adalah LAG ya pasti,
            untuk menanggulaninya ubah Adjust Performance ke paling rendah saja,
            apabila masih LAG tambah RAM atau Heatsink sudah kotor itu saja.
          </p>
        </li>

        <li className="bg-white p-4 rounded-lg shadow">
          <code className="text-sm md:text-base font-mono bg-gray-100 p-1 rounded">
            Permasalahan X-lite (PBX - Elastix):
          </code>
          <p className="mt-2">
            Shutdown dulu X-lite kemudian hidupkan kembali, apabila belum
            berjalan cek di X-lite app desktop secara langsung, yang paling
            buruk adalah alamat IP berubah, atau lalu lintas jaringan tiba-tiba
            berubah jalur, nah untuk solusinya cek pada Winbox coba ke DHCP
            lihat IP nya ada yang otomatis pakai.
          </p>
        </li>
      </ul>
    </div>
  );
}
