import React, { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import Order from '../components/Order';
import useOrderStore from '../store/orderStore';
import useSideOrderStore from '../store/sideOrderStore';
import '../styles/CookingPage.css';

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
      <div className="cooking-split-container">
        <div className="burger-section">
          <h1 className="cooking-section-title">버거</h1>
          <Order
            orders={orders}
            onCompleteOrder={handleCompleteOrder}
            onCompleteAllOrders={handleCompleteAllOrders}
          />
        </div>
        <div className="side-section">
          <h1 className="cooking-section-title">사이드</h1>
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
