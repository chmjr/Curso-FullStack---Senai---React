import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SCmapa } from "../styles/SCmapa";

export const ListaMapFarm = () => {
  const farmacias = JSON.parse(localStorage.getItem("farmacia")) || []; //Pega a lista de farmacias do localStorage
  const position = [-27.5933442, -48.5374768]; //posição inicial do mapa
  const markers = [];
  //Aqui vão todas farmacias cadastradas
  farmacias.forEach((farmacia) => {
    markers.push({
      geocode: [farmacia.lat, farmacia.lng],
      popUp: [
        //conteúdo do popUp com as informações da farmacia
        farmacia.cnpj,
        farmacia.razaoSocial,
        farmacia.nomeFantasia,
        farmacia.telefone,
        farmacia.email,
        farmacia.logradouro,
        farmacia.numeroEnd,
        farmacia.bairro,
        farmacia.cidade,
        farmacia.estado,
        farmacia.cep,
        farmacia.celular,
      ],
      id: farmacia.cnpj,
    });
  });

  return (
    <SCmapa>
      <div className="divMapa">
        <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></TileLayer>
          {/* <TileLayer  OUTRO TIPO DE MAPA
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=j9Hjxe9CyM4zd3qeo03u"
      /> */}
          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.geocode}>
              <Popup>
                <div className="popup-container">
                  <h3>{marker.popUp[1]}</h3>
                  <div className="popup-section">
                    <h4>Contato</h4>
                    <ul>
                      <li>Telefone: {marker.popUp[3]}</li>
                      <li>Email: {marker.popUp[4]}</li>
                      <li>
                        Celular:
                        <a
                          target="_blank"
                          href={`https://wa.me/55${marker.popUp[11].replace(
                            //trata o celular para tirar o espaço branco e as () para funcionar o link
                            /[()\s]/g,
                            ""
                          )}`}
                        >
                          {marker.popUp[11]}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="popup-section">
                    <h4>Endereço</h4>
                    {marker.popUp[5]}, {marker.popUp[6]}, {marker.popUp[7]}
                    <br></br>
                    {marker.popUp[8]}-{marker.popUp[9]}
                  </div>
                  <div className="popup-section">
                    <h4>Outras informações</h4>
                    <ul>
                      <li>CNPJ: {marker.popUp[0]}</li>
                      <li>Nome Fantasia: {marker.popUp[2]}</li>
                    </ul>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </SCmapa>
  );
};
