import CartButtons from "./CartButtons";

const TableRow = ({ product }) => {
  const rowPrice = product.quantity * product.price;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{product.title}</div>
            <div className="text-sm opacity-50">{product.category}</div>
          </div>
        </div>
      </td>
      <td>
        <CartButtons product={product} />
      </td>
      <td>{rowPrice.toFixed(2)} €</td>
    </tr>
  );
};

export default TableRow;
