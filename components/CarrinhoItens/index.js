

function CarrinhoIntens({carrinho, delIntemCarrinho}){
    return(

        <div className="flex flex-col gap-4">

        {carrinho.map((itens, index) => (
            <div>
                {itens.nome}
                <button className="bg-white" onClick={() => delIntemCarrinho(index)}>id: {index}</button> 
            </div>
        ))}
            
        </div>

    );
}

export default CarrinhoIntens;