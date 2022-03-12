import {FaGithub} from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer py-2.5 bg-gray-700 text-primary-content footer-center">
      <div>
        <FaGithub className="inline pr-2 text-3xl" />
        Copyright &copy; {footerYear}
      </div>
    </footer>
  )
}

export default Footer;