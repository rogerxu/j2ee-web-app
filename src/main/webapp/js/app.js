const app = new Vue({
  el: '#app',
  data: {
    title: 'Welcome',
    message: 'Hello World!',
    date: new Date(),
  },
  filters: {
    formatDate(date) {
      return date.toDateString();
    },
  },
});
