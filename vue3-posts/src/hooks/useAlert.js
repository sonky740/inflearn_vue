import { ref } from 'vue';
const alerts = ref([]); // 함수 스코프가 아닌 모듈 스코프로 빼서 App, PostEditView에서 따로 호출해도 되게끔 함.

export function useAlert() {
  // const alerts = ref([]);
  const vAlert = (message, type = 'error') => {
    alerts.value.push({
      message,
      type,
    });
    setTimeout(() => {
      alerts.value.shift();
    }, 1500);
  };
  const vSuccess = message => {
    vAlert(message, 'success');
  };

  return {
    alerts,
    vAlert,
    vSuccess,
  };
}
