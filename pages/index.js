import Head from 'next/head'
import Header from '../components/Header/Header';
import { useState } from 'react';
import CarrinhoIntens from '../components/CarrinhoItens';

export const produtos = [
  {foto: 'foto', nome: 'Produto 1', quantidade: '1', preco: 332},
  {foto: 'foto', nome: 'Produto 2', quantidade: '1', preco: 332},
  {foto: 'foto', nome: 'Produto 3', quantidade: '1', preco: 332},
  {foto: 'foto', nome: 'Produto 4', quantidade: '1', preco: 332},
];


export default function Home() {

  const [carrinho, setCarrinho] = useState([]);
  console.log(carrinho);


  function addIntemCarrinho(item){
    const itemObject = {foto: item.foto, nome: item.nome};
    setCarrinho([...carrinho, itemObject]);

  };


  function delIntemCarrinho(itemIndex){
      console.log(itemIndex);
  }


  return (
    <div className="flex flex-col h-screen bg-gray-700">
      <Head>
        <title>e-commerce</title>
        <meta name="description" content="e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <div className="flex flex-row gap-8">
        {produtos.map(produto => (

          <div>
            <div className="bg-red-500  flex flex-col gap-1 p-4">
              <di>{produto.foto}</di>
              <div>{produto.nome}</div>
              <div>{produto.quantidade}</div>
              <div>{produto.preco}</div>
              <button className="bg-white" onClick={() => addIntemCarrinho(produto)}>add</button>
            </div>
          </div>

        ))}
      </div>


      <CarrinhoIntens carrinho={carrinho} delIntemCarrinho={delIntemCarrinho}></CarrinhoIntens>

    </div>
  )
}

