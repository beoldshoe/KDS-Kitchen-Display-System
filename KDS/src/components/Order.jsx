import '../styles/Order.css';

function Order({ orders }) {
  if (!orders || orders.length === 0) {
    return <div className="order-list empty">No orders</div>;
  }
  return (
    <div className="order-list">
      {orders.map((order, idx) => (
        <div className="order-card" key={order.id || idx}>
          <div className="order-id">주문번호 {order.id}</div>
          <div className="order-type"> {order.orderType}</div>
          <div className="order-menu">
            {order.items.map((item) => (
              <div>
                {item.menu.name} {item.quantity}
                <span className="order-individual-request">
                  {item.individualRequest && `(${item.individualRequest})`}
                </span>
              </div>
            ))}
          </div>
          <div className="order-customer-request">
            <div className="order-customer-request-title">고객 요청사항 </div>
            <div>{order.customerRequest || '없음'}</div>
          </div>
          <button className="order-complete-button"> 버거 완료</button>
        </div>
      ))}
    </div>
  );
}

export default Order;
