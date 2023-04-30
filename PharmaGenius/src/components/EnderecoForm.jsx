import React, { useState } from "react";

export const EnderecoForm = ({ register, errors, setValue }) => {
  // Defina o estado inicial do componente
  const [endereco, setEndereco] = useState({});

  // Crie uma função para buscar o endereço a partir do CEP
  const buscaCep = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setValue("logradouro", data.logradouro);
      setValue("bairro", data.bairro);
      setValue("cidade", data.localidade);
      setValue("estado", data.uf);
    } catch (error) {
      console.log("Erro ao buscar endereço: " + error.message);
    }
  };

  const handleChangeCep = (event) => {
    const cep = event.target.value.replace("-", "");
    if (cep.length === 8) {
      buscaCep(cep);
    }
  };

  // //Funcao pegar cordenadas a partir do CEP (Não funcionou pq API não pega certo)
  // const buscaCordenadas = (cep) => {
  //   console.log("Buscando coordenadas para o CEP: " + cep);
  //   fetch(
  //     `https://nominatim.openstreetmap.org/search.php?q=${cep}, Florianópolis, Santa Catarina&format=json`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const lat = data[0].lat;
  //       const lon = data[0].lon;
  //       setCordenadas({ lat, lon });
  //       console.log(`Latitude: ${lat}, Longitude: ${lon}`);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao obter dados de geolocalização:", error);
  //     });
  // };

  // Renderize o formulário e os campos de endereço
  return (
    <div className="divEndereco">
      <span>Informações de Endereço</span>
      <br></br>
      <label htmlFor="cep" style={errors.cep && { color: "red" }}>
        CEP: *
      </label>
      <input
        type="text"
        name="cep"
        id="cep"
        {...register("cep", { required: true })}
        onChange={handleChangeCep}
      />
      <label htmlFor="logradouro">Logradouro:</label>
      <input
        type="text"
        name="logradouro"
        id="logradouro"
        {...register("logradouro", { required: true })}
        readOnly
      />

      <label htmlFor="bairro">Bairro:</label>
      <input
        type="text"
        id="bairro"
        name="bairro"
        readOnly
        {...register("bairro", { required: true })}
      />
      <br></br>
      <label htmlFor="cidade">Cidade:</label>
      <input
        type="text"
        id="cidade"
        name="cidade"
        {...register("cidade", { required: true })}
        readOnly
      />

      <label htmlFor="estado">Estado:</label>
      <input
        type="text"
        id="estado"
        name="estado"
        {...register("estado", { required: true })}
        readOnly
      />

      <label htmlFor="numeroEnd" style={errors.numeroEnd && { color: "red" }}>
        N°: *
      </label>
      <input
        type="text"
        id="numeroEnd"
        name="numeroEnd"
        {...register("numeroEnd", { required: true })}
      />
      <br></br>
      <label htmlFor="complemento">Complemento:</label>
      <input
        type="text"
        id="complemento"
        name="complemento"
        {...register("complemento")}
      />
      <label htmlFor="latitude" style={errors.lat && { color: "red" }}>
        Latitude: *
      </label>
      <input
        type="text"
        id="lat"
        name="lat"
        {...register("lat", { required: true })}
      />
      <label htmlFor="lng" style={errors.lng && { color: "red" }}>
        Longetude: *
      </label>
      <input
        type="text"
        id="lng"
        name="lng"
        {...register("lng", { required: true })}
      />
    </div>
  );
};
