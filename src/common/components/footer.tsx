const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='p-3 text-center text-sm'>
      Copyright <b>Sergio Tran</b> - {year}
    </footer>
  )
}

export default Footer
