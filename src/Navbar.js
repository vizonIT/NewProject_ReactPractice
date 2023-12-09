const Navbar = () => {
  const link1 = 'https://home.com';
  const link2 = 'https://contacts.com';
  const link3 = 'https://about.com';
  const link4 = 'https://services.com';

  return (
    <div className="content">
      <a href={link1}>Home</a>
      <a href={link2}>Contact</a>
      <a href={link3}>About Us</a>
      <a href={link4}>Services</a>
    </div>
  );
}

export default Navbar;