import React, { useEffect, useState } from 'react';
import PageLayout from '../layouts/PageLayout';
import Order from '../components/Order';
import { fetchOrdersWithItemsAndMenus } from '../api/OrderApi';

function CookingPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrdersWithItemsAndMenus().then(setOrders).catch(console.error);
  }, []);

  return (
    <PageLayout>
      <Order orders={orders} />
    </PageLayout>
  );
}
export default CookingPage;
