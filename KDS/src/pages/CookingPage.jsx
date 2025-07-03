import React, { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import Order from '../components/Order';
import useOrderStore from '../store/orderStore';
import useSideOrderStore from '../store/sideOrderStore';

function CookingPage() {
  const {
    orders,
    fetchOrders,
    removeOrder: removeBurgerOrder,
  } = useOrderStore();
  const { orders: sideOrders, addOrder: addSideOrder } = useSideOrderStore();

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // 완료 버튼 클릭 시 order를 side로 이동
  const handleCompleteOrder = (order) => {
    removeBurgerOrder(order.id);
    addSideOrder(order);
  };

  // 모두 완료 버튼 클릭 시(예시)
  const handleCompleteAllOrders = (order) => {
    // 원하는 동작 구현
    console.log(`${order.id} 모두 완료`);
  };

  return (
    <PageLayout>
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <div
          style={{
            flex: 1,
            borderRight: '2px solid #eee',
            padding: '1vw',
            boxSizing: 'border-box',
          }}
        >
          <h2 style={{ textAlign: 'center' }}>버거</h2>
          <Order
            orders={orders}
            onCompleteOrder={handleCompleteOrder}
            onCompleteAllOrders={handleCompleteAllOrders}
          />
        </div>
        <div style={{ flex: 1, padding: '1vw', boxSizing: 'border-box' }}>
          <h2 style={{ textAlign: 'center' }}>사이드</h2>
          <Order
            orders={sideOrders}
            onCompleteAllOrders={handleCompleteAllOrders}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default CookingPage;
