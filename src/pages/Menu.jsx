
import Chatbot from "../components/Chatbot";
import MenuList from "../components/MenuList";

const Menu = () => {
  return (
      <div className="flex flex-col items-center p-8 min-h-screen overflow-visible"> {/* Añadir padding y centrar */}
          <div className="flex w-full">
              {/* Lista de productos (75% del ancho) */}
              <div className="w-3/4 p-4">
                  <MenuList />
              </div>
              {/* Chatbot (25% del ancho) */}
              <div className="w-1/4 p-4">
                  <Chatbot />
              </div>
          </div>
      </div>
  );
};
export default Menu;

