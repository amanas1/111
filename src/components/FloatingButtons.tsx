import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/77055535332"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0095DA] hover:bg-[#0084c0] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        title="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href="tel:+77055535332"
        className="w-14 h-14 bg-[#4ADE80] hover:bg-[#3dca72] text-gray-900 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        title="Позвонить"
      >
        <Phone size={26} />
      </a>
    </div>
  );
};

export default FloatingButtons;
