import './globals.css';

export const metadata = {
  title: 'PPLG Dev — Jasa Pembuatan Website oleh Siswa PPLG',
  description: 'Jasa pembuatan website cepat, rapi, dan terjangkau, dikerjakan langsung oleh siswa PPLG.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}