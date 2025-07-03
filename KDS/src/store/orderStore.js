import { create } from 'zustand';
// Zustand 라이브러리에서 스토어를 생성하는 'create' 함수를 가져옵니다.

import { fetchOrdersWithItemsAndMenus } from '../api/OrderApi';
// 'OrderApi.js' 파일에서 주문, 주문 아이템, 메뉴 정보를 한 번에 가져오는 비동기 함수를 가져옵니다.

const useOrderStore = create((set) => ({
  // 'useOrderStore'라는 이름의 Zustand 스토어를 생성합니다.
  // 'create' 함수는 'set'이라는 함수를 인자로 받는 콜백 함수를 받으며,
  // 이 콜백 함수는 스토어의 초기 상태와 상태를 변경하는 액션(함수)들을 정의합니다.

  orders: [],
  // 'orders'는 스토어의 상태 중 하나로, 모든 주문 데이터를 담을 배열입니다. 초기값은 빈 배열입니다.

  loading: false,
  // 'loading'은 데이터 로딩 상태를 나타내는 불리언 값입니다. 데이터를 불러오는 중일 때 'true'가 됩니다.

  error: null,
  // 'error'는 데이터 로딩 중 발생한 오류를 저장하는 곳입니다. 오류가 없으면 'null'입니다.

  fetchOrders: async () => {
    // 'fetchOrders'는 서버에서 주문 데이터를 비동기적으로 가져오는 액션(함수)입니다.

    set({ loading: true, error: null });
    // 'fetchOrders'가 호출되면, 'loading'을 'true'로 설정하여 로딩 시작을 알리고, 'error'를 'null'로 초기화합니다.

    try {
      const data = await fetchOrdersWithItemsAndMenus();
      // 'fetchOrdersWithItemsAndMenus' 함수를 호출하여 서버에서 데이터를 가져옵니다. (비동기 대기)

      set({ orders: data, loading: false });
      // 데이터 가져오기가 성공하면, 'orders' 상태를 가져온 'data'로 업데이트하고, 'loading'을 'false'로 변경합니다.
    } catch (err) {
      // 데이터 가져오기 중 오류가 발생하면 이 블록이 실행됩니다.

      set({ error: err, loading: false });
      // 'error' 상태에 발생한 오류를 저장하고, 'loading'을 'false'로 변경합니다.
    }
  },

  setOrders: (orders) => set({ orders }),
  // 'setOrders'는 외부에서 전달받은 'orders' 배열로 스토어의 'orders' 상태를 직접 설정하는 액션입니다.

  removeOrder: (orderId) =>
    // 'removeOrder'는 특정 'orderId'를 가진 주문을 'orders' 배열에서 제거하는 액션입니다.

    set((state) => ({ orders: state.orders.filter((o) => o.id !== orderId) })),
  // 현재 'orders' 배열에서 전달받은 'orderId'와 ID가 일치하지 않는 주문들만 필터링하여 새로운 배열을 만들고,
  // 이 새 배열로 'orders' 상태를 업데이트합니다. (불변성 유지)
}));

export default useOrderStore;
// 다른 파일에서 이 스토어를 사용할 수 있도록 내보냅니다.
