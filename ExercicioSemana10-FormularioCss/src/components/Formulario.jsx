import MenuFormulario from "./MenuFormulario";
import { Outlet, Router } from "react-router-dom";
import { useEffect, useState } from "react";

function Formulario() {
  return (
    <div className="formulario">
      <MenuFormulario />
      <Outlet />
    </div>
  );
}

export default Formulario;
