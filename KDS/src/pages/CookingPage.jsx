import React, { useEffect, useState, useMemo } from 'react';
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
  const [category, setCategory] = useState('burger'); // 기본값 '버거'

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // 완료 버튼 클릭 시 order를 side로 이동
  const handleCompleteOrder = (order) => {
    removeBurgerOrder(order.id);
    addSideOrder(order);
  };

  // 카테고리에 따라 주문 필터링
  const filteredOrders = useMemo(() => {
    if (category === 'burger') return orders;
    if (category === 'side') return sideOrders;
    return [];
  }, [orders, sideOrders, category]);

  return (
    <PageLayout category={category} setCategory={setCategory}>
      <Order
        orders={filteredOrders}
        onCompleteOrder={
          category === 'burger' ? handleCompleteOrder : undefined
        }
      />
    </PageLayout>
  );
}

export default CookingPage;
