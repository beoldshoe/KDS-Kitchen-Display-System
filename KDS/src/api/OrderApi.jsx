import axios from 'axios';

export const fetchOrders = async () => {
  try {
    const response = await axios.get('http://localhost:3000/orders');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    throw error;
  }
};

export const fetchOrderItems = async () => {
  try {
    const response = await axios.get('http://localhost:3000/orderItems');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch orderItems:', error);
    throw error;
  }
};

export const fetchMenus = async () => {
  try {
    const response = await axios.get('http://localhost:3000/menus');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch menus:', error);
    throw error;
  }
};

export const fetchOrdersWithItemsAndMenus = async () => {
  try {
    const [orders, orderItems, menus] = await Promise.all([
      fetchOrders(),
      fetchOrderItems(),
      fetchMenus(),
    ]);
    const orderItemsWithMenu = orderItems.map((item) => ({
      ...item,
      menu: menus.find((menu) => menu.id === item.menuId) || null,
    }));
    const ordersWithItems = orders.map((order) => ({
      ...order,
      items: orderItemsWithMenu.filter((item) => item.orderId === order.id),
    }));

    return ordersWithItems;
  } catch (error) {
    console.error('Failed to fetch orders with items and menus:', error);
    throw error;
  }
};
