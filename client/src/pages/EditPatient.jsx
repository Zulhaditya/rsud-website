import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { listProvinsi } from '../data/provinsi'

const EditPatient = () => {
  const [rm, setRm] = useState('')
  const [nik, setNik] = useState('')
  const [nama, setNama] = useState('')
  const [gender, setGender] = useState('')
  const [klinik, setKlinik] = useState('')
  const [jaminan, setJaminan] = useState('')
  const [kunjungan, setKunjungan] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tglLahir, setTglLahir] = useState('')
  const [agama, setAgama] = useState('')
  const [statusPernikahan, setStatusPernikahan] = useState('')
  const [pendidikan, setPendidikan] = useState('')
  const [pekerjaan, setPekerjaan] = useState('')
  const [golDarah, setGolDarah] = useState('')
  const [jenis, setJenis] = useState('')
  const [kota, setKota] = useState('')
  const [kecamatan, setKecamatan] = useState('')
  const [kelurahan, setKelurahan] = useState('')
  const [jalan, setJalan] = useState('')
  const [alamat, setAlamat] = useState('')
  const [phone, setPhone] = useState('')
  const [suku, setSuku] = useState('')
  const [bahasa, setBahasa] = useState('')
  const [namaPj, setNamaPj] = useState('')
  const [tglKunjungan, setTglKunjungan] = useState('')
  const [dokterKunjungan, setDokterKunjungan] = useState('')
  const [jadwalKunjungan, setJadwalKunjungan] = useState('')
  const [noAsuransi, setNoAsuransi] = useState('')
  const [provinsi, setProvinsi] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getPatientById()
  }, [])

  const getPatientById = async () => {
    const response = await axios.get(`http://localhost:8080/patients/${id}`)
    setRm(response.data.rm)
    setNik(response.data.nik)
    setNama(response.data.nama)
    setGender(response.data.gender)
    setKlinik(response.data.klinik)
    setJaminan(response.data.jaminan)
    setKunjungan(response.data.kunjungan)
    setTempatLahir(response.data.tempatLahir)
    setTglLahir(response.data.tglLahir)
    setAgama(response.data.agama)
    setStatusPernikahan(response.data.statusPernikahan)
    setPendidikan(response.data.pendidikan)
    setPekerjaan(response.data.pekerjaan)
    setGolDarah(response.data.golDarah)
    setJenis(response.data.jenis)
    setProvinsi(response.data.provinsi)
    setKota(response.data.kota)
    setKecamatan(response.data.kecamatan)
    setKelurahan(response.data.kelurahan)
    setJalan(response.data.jalan)
    setAlamat(response.data.alamat)
    setPhone(response.data.phone)
    setSuku(response.data.suku)
    setBahasa(response.data.bahasa)
    setNamaPj(response.data.namaPj)
    setTglKunjungan(response.data.tglKunjungan)
    setDokterKunjungan(response.data.dokterKunjungan)
    setJadwalKunjungan(response.data.jadwalKunjungan)
    setNoAsuransi(response.data.noAsuransi)
  }

  const updatePatient = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:8080/patients/${id}`, {
        rm,
        nik,
        nama,
        gender,
        jaminan,
        klinik,
        kunjungan,
        tempatLahir,
        tglLahir,
        agama,
        statusPernikahan,
        pendidikan,
        pekerjaan,
        golDarah,
        jenis,
        provinsi,
        kota,
        kecamatan,
        kelurahan,
        jalan,
        alamat,
        phone,
        suku,
        bahasa,
        namaPj,
        tglKunjungan,
        dokterKunjungan,
        jadwalKunjungan,
        noAsuransi,
      })
      navigate('/main')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container font-poppins text-sm'>
      <div className='mb-5 flex justify-center'>
        <form onSubmit={updatePatient}>
          <div className='mt-4 mb-4'>
            <h2 className='text-xl'>Data Pribadi</h2>
            <p className='text-slate-400'>Lengkapi data pribadi pasien</p>
          </div>
          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Jenis Pasien</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={jenis}
                onChange={(e) => setJenis(e.target.value)}
              >
                <option defaultValue={'Pilih'}>Pilih</option>
                <option value='Pasien Baru'>Pasien Baru</option>
                <option value='Pasien Lama'>Pasien Lama</option>
                <option value='Pasien Umum'>Pasien Umum</option>
                <option value='Pasien Bayi'>Pasien Bayi</option>
                <option value='Pasien Tidak Dikenal'>
                  Pasien Tidak Dikenal
                </option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>No RM</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan no rm'
                value={rm}
                onChange={(e) => setRm(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>NIK</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan NIK'
                value={nik}
                onChange={(e) => setNik(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Nama</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan nama'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Gender</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option defaultValue={'Pilih'}>Pilih</option>
                <option value='L'>Pria</option>
                <option value='P'>Wanita</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-52 px-[15px] mr-1'>
              <h2 className='star'>Tempat Lahir</h2>
            </div>
            <div className='w-64'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan tempat lahir'
                value={tempatLahir}
                onChange={(e) => setTempatLahir(e.target.value)}
              />
            </div>
            <div className='text-end px-3 w-1/4'>
              <h2 className='star'>Tanggal Lahir</h2>
            </div>
            <div className='w-1/4'>
              <input
                type='date'
                className='form-input'
                onChange={(e) => setTglLahir(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Agama</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={agama}
                onChange={(e) => setAgama(e.target.value)}
              >
                <option>Pilih</option>
                <option value='Islam'>Islam</option>
                <option value='Protestan'>Protestan</option>
                <option value='Katolik'>Katolik</option>
                <option value='Hindu'>Hindu</option>
                <option value='Buddha'>Buddha</option>
                <option value='Khonghucu'>Khonghucu</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Pendidikan</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={pendidikan}
                onChange={(e) => setPendidikan(e.target.value)}
              >
                <option>Pilih</option>
                <option value='SD'>SD</option>
                <option value='SLTP'>SMP Sederajat</option>
                <option value='SLTA'>SMA Sederajat</option>
                <option value='D3'>D3</option>
                <option value='S1'>S1</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Pekerjaan</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={pekerjaan}
                onChange={(e) => setPekerjaan(e.target.value)}
              >
                <option>Pilih</option>
                <option value='PNS'>PNS</option>
                <option value='Wiraswasta'>Wiraswasta</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Golongan Darah</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={golDarah}
                onChange={(e) => setGolDarah(e.target.value)}
              >
                <option>Pilih</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='AB'>AB</option>
                <option value='O'>O</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Status Pernikahan</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={statusPernikahan}
                onChange={(e) => setStatusPernikahan(e.target.value)}
              >
                <option>Pilih</option>
                <option value='Menikah'>Menikah</option>
                <option value='Belum Menikah'>Belum Menikah</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Provinsi</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}
              >
                <option value='Pilih'>Pilih</option>
                {listProvinsi.map((province) => {
                  return (
                    <option value={province.nama} key={province.id}>
                      {province.nama}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-52 px-[15px] mr-1'>
              <h2 className='star'>Kabupaten/Kota</h2>
            </div>
            <div className='w-64'>
              <input
                type='text'
                className='form-input'
                placeholder='Kabupaten/kota'
                value={kota}
                onChange={(e) => setKota(e.target.value)}
              />
            </div>
            <div className='text-end px-3 w-1/4'>
              <h2 className='star'>Kecamatan</h2>
            </div>
            <div className='w-1/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Kecamatan'
                value={kecamatan}
                onChange={(e) => setKecamatan(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-52 px-[15px] mr-1'>
              <h2 className='star'>Kelurahan</h2>
            </div>
            <div className='w-64'>
              <input
                type='text'
                className='form-input'
                placeholder='Kelurahan'
                value={kelurahan}
                onChange={(e) => setKelurahan(e.target.value)}
              />
            </div>
            <div className='text-end px-3 w-1/4'>
              <h2 className='star'>Jalan/dusun</h2>
            </div>
            <div className='w-1/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Jalan/dusun'
                value={jalan}
                onChange={(e) => setJalan(e.target.value)}
              />
            </div>
          </div>

          <div className='flex mb-3'>
            <div className='text-end w-1/4 px-3 py-[12px]'>
              <h2 className='star'>Alamat Domisili</h2>
            </div>
            <div className='w-3/4'>
              <textarea
                className='form-input'
                placeholder='Masukkan alamat domisili'
                style={{ height: '130px' }}
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>No Telp</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan nomor telp'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Suku</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan suku'
                value={suku}
                onChange={(e) => setSuku(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-5'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Bahasa</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan bahasa'
                value={bahasa}
                onChange={(e) => setBahasa(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h2 className='text-xl'>Data Penanggung Jawab</h2>
            <p className='text-slate-400'>Lengkapi data penanggung jawab</p>
          </div>

          <div className='flex justify-center items-center mt-4 mb-5'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Nama</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan nama'
                value={namaPj}
                onChange={(e) => setNamaPj(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h2 className='text-xl'>Data Kunjungan</h2>
            <p className='text-slate-400'>Lengkapi data data kunjungan</p>
          </div>

          <div className='flex justify-center items-center mt-4 mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Tanggal</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='date'
                className='form-input'
                onChange={(e) => setTglKunjungan(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Klinik</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={klinik}
                onChange={(e) => setKlinik(e.target.value)}
              >
                <option>Pilih</option>
                <option value='Penyakit Dalam'>Penyakit Dalam</option>
                <option value='Paru'>Paru</option>
                <option value='Gigi'>Gigi</option>
                <option value='Gigi'>Mata</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Dokter</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={dokterKunjungan}
                onChange={(e) => setDokterKunjungan(e.target.value)}
              >
                <option>Pilih</option>
                <option value='dr. Ardy, Sp.PD'>dr. Ardy, Sp.PD</option>
                <option value='dr. Hady, Sp.PD'>dr. Hady, Sp.PD</option>
                <option value='dr. Daru Jaka Sulistya, Sp.PDs'>
                  dr. Daru Jaka Sulistya, Sp.PD
                </option>
                <option value='dr. Ade Firman Saroso, Sp.KK'>
                  dr. Ade Firman Saroso, Sp.KK
                </option>
                <option value='drg. Selli Reviona'>drg. Selli Reviona</option>
                <option value='drg. Ufo Pramigi'>drg. Ufo Pramigi</option>
                <option value='dr. Matahari Arsy Harum Permata, Sp.KK'>
                  dr. Matahari Arsy Harum Permata, Sp.KK
                </option>
                <option value='dr. Marisa, Sp.M'>dr. Marisa, Sp.M</option>
                <option value='dr. Nurul Widiati, Sp.M'>
                  dr. Nurul Widiati, Sp.M
                </option>
                <option value='dr. Bambang Herwindu, Sp.M'>
                  dr. Bambang Herwindu, Sp.M
                </option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Jadwal</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='date'
                className='form-input'
                onChange={(e) => setJadwalKunjungan(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Cara Masuk</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={kunjungan}
                onChange={(e) => setKunjungan(e.target.value)}
              >
                <option>Pilih</option>
                <option value='Online'>Online</option>
                <option value='Offline'>Offline</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>Jaminan</h2>
            </div>
            <div className='w-3/4'>
              <select
                className='form-select'
                value={jaminan}
                onChange={(e) => setJaminan(e.target.value)}
              >
                <option>Pilih</option>
                <option value='Umum'>Umum</option>
                <option value='Jamkesos'>Jamkesos</option>
                <option value='Jamkesmas'>Jamkesmas</option>
                <option value='Jasa Raharja'>Jasa Raharja</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center items-center mb-3'>
            <div className='text-end w-1/4 px-3'>
              <h2 className='star'>No Asuransi</h2>
            </div>
            <div className='w-3/4'>
              <input
                type='text'
                className='form-input'
                placeholder='Masukkan no asuransi'
                value={noAsuransi}
                onChange={(e) => setNoAsuransi(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-end items-center'>
            <div className='px-3 py-2 bg-blue-800 rounded-lg text-white hover:bg-blue-900'>
              <button type='submit'>Simpan</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPatient
