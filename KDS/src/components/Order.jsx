// Order.jsx
// 주문 목록을 카드 형태로 렌더링하는 컴포넌트입니다.
// props로 받은 orders 배열을 순회하며 각 주문의 상세 정보, 메뉴, 요청사항, 완료 버튼 등을 표시합니다.
// onCompleteOrder, onCompleteAllOrders 콜백을 통해 주문 상태 변경을 처리할 수 있습니다.

import '../styles/Order.css';

function Order({ orders, onCompleteOrder, onCompleteAllOrders }) {
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
            {order.items.map((item) => {
              const isBurger =
                !onCompleteOrder && item.menu.name.includes('버거');
              return (
                <div key={item.id}>
                  <span className={isBurger ? 'menu-cancelled' : ''}>
                    {item.menu.name} {item.quantity}
                  </span>
                  <span
                    className={`order-individual-request${
                      isBurger ? ' menu-cancelled' : ''
                    }`}
                  >
                    {item.individualRequest && `(${item.individualRequest})`}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="order-customer-request">
            <div className="order-customer-request-title">고객 요청사항 </div>
            <div>{order.customerRequest || '없음'}</div>
          </div>
          <div className="order-complete-buttons">
            {onCompleteOrder && (
              <button
                className="order-complete-button burger"
                onClick={() => onCompleteOrder(order)}
              >
                버거 완료
              </button>
            )}
            <button
              className="order-complete-button all"
              onClick={() => {
                if (onCompleteAllOrders) {
                  onCompleteAllOrders(order);
                } else {
                  console.log(`${order.id}모두 완료`);
                }
              }}
            >
              모두 완료
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
