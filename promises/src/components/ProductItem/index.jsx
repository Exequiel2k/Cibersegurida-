const ProductItem
 = ({producto}) => {
  return (
    <div>
      <h3>{producto.title}</h3>
    <img src={producto.image} width={200}/>
    <h4>{'$ ' + producto.price}</h4>
    <button>COMPRAR</button>
    </div>
  )
}

export default ProductItem
