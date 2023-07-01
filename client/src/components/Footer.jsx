import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="contenedor bg-success">
      <div className="contenedorInt">
        <div>
          <h3>Contacto</h3>
          <p>Correo electrónico: cristiangc92@gmail.com</p>
          <p>Teléfono: (+54)93854836255</p>
        </div>
        <div>
          <h3>Derechos de autor</h3>
          <p>(c) 2023 Dogs SPA. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}
