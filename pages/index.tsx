import React , { useState, useEffect } from 'react';
import Head from 'next/head'
import axios from 'axios'


interface IProps {
  data: any
}


export default function Home() {

  const [data, setData] = useState();

  const fetchData = async () => {
    const result = await axios(
      'https://radar.tntbrasil.com.br/radargateway/service/tracking/findLinhaTempoEvento?idDoctoServico=16758467',
    );
    setData(result.data);

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <h1>Rastreio do DELL</h1>
        <span>
          <h3>Data emissão do Documento: {data?.eventoColeta?.dhEmissaoDoc}</h3>
          <h3>Data da última atualização de status: {data?.eventoColeta?.dhEvento}</h3>
          <h3>Status: {data?.msgStatus}</h3>
          <h3>Em transito: {data?.eventoEmTransito ?? 'Não'}</h3>
          <h3>Filial de Destino: {data?.eventoFilialDestino ?? 'Não'}</h3>
          <h3>Em rota de entrega: {data?.eventoEmRotaEntrega ?? 'Não'}</h3>
          <h3>Finalizado: {data?.eventoFinalizado ?? 'Não'}</h3>
        </span>
    </div>
  )
}
