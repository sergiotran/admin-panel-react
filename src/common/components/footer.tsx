const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='p-3 text-center text-sm flex-1'>
      Copyright <b>Sergio Tran</b> - {year}
    </footer>
  )
}

export default Footer
