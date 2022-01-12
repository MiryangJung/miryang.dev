export default function nowDate() {
  const date = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
  return date
}
