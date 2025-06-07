import React from 'react';

function Footer() {
  return (
    <footer className="app-footer">
      {/* Este container interno centralizará o conteúdo do rodapé */}
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Canes Grill. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
