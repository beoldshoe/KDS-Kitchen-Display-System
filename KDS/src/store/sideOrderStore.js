import { create } from 'zustand';
// Zustand 라이브러리에서 스토어를 생성하는 'create' 함수를 가져옵니다.

const useSideOrderStore = create((set) => ({
  // 'useSideOrderStore'라는 이름의 Zustand 스토어를 생성합니다.
  // 이 스토어는 주로 사이드 메뉴와 관련된 주문 상태를 관리합니다.
  // 'create' 함수는 'set' 함수를 인자로 받는 콜백 함수를 받으며,
  // 이 콜백 함수 내에서 스토어의 초기 상태와 상태를 변경하는 액션(함수)들을 정의합니다.

  orders: [],
  // 'orders'는 스토어의 상태 중 하나로, 사이드 메뉴 주문 데이터를 담을 배열입니다. 초기값은 빈 배열입니다.

  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  // 'addOrder'는 새로운 'order' 객체를 'orders' 배열에 추가하는 액션(함수)입니다.
  // 'set' 함수에 콜백을 전달하여 현재 상태(state)를 기반으로 새로운 상태를 생성합니다.
  // '...' (스프레드 연산자)를 사용하여 기존 'orders' 배열의 모든 요소를 복사하고, 그 뒤에 새 'order'를 추가하여
  // 새로운 배열을 반환함으로써 상태의 불변성을 유지합니다.

  removeOrder: (orderId) =>
    // 'removeOrder'는 특정 'orderId'를 가진 주문을 'orders' 배열에서 제거하는 액션(함수)입니다.

    set((state) => ({ orders: state.orders.filter((o) => o.id !== orderId) })),
  // 현재 'orders' 배열에서 전달받은 'orderId'와 ID가 일치하지 않는 주문들만 필터링하여 새로운 배열을 만듭니다.
  // 이 새 배열로 'orders' 상태를 업데이트하여 해당 주문을 제거합니다. (불변성 유지)

  setOrders: (orders) => set({ orders }),
  // 'setOrders'는 외부에서 전달받은 'orders' 배열로 스토어의 'orders' 상태를 직접 설정하는 액션입니다.
  // 이 액션은 주로 초기 데이터를 설정하거나, 외부에서 대량의 주문 목록을 한 번에 업데이트할 때 사용될 수 있습니다.
}));

export default useSideOrderStore;
// 다른 리액트 컴포넌트나 모듈에서 이 스토어를 가져와 사용할 수 있도록 내보냅니다.
