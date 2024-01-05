import "./whatsapp.scss"

export default function Whatsapp() {
  const handleWhatsAppClick = () => {
    // Redirige a la URL de WhatsApp
    window.location.href = 'https://wa.me/2255438911';
  };

  return (
    <div className='whatsapp' onClick={handleWhatsAppClick}>
      <img src="pngwing.com.png" alt="WhatsApp" />
    </div>
  );
}
