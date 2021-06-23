const app = new Vue({
  el: '#app',
  data: {
    books: [ 
      {
        id: 1,
        name: '<augr>',
        date: '2006-9',
        price: 85.00,
        count: 1,
      },
      {
        id: 2,
        name: '<unix>',
        date: '2006-2',
        price: 59.00,
        count: 1,
      },
      {
        id: 3,
        name: '<bia>',
        date: '2008-10',
        price: 39.00,
        count: 1,
      },
      {
        id: 4,
        name: '<code>',
        date: '2006-1',
        price: 77.00,
        count: 1,
      },
    ] 
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index,1);
    },
  },
  computed: {
    totalPrice() {     
    let totalPrice = 0;
      // for(let i=0; i<this.books.length; i++) {
      //    totalPrice += this.books[i].price*this.books[i].count;
      // }
      totalPrice = this.books.reduce(
        (p, q) => p + q.price*q.count, 0    //注意这里初始值设0，p为数值，否则两者都为对象没法返回数值
      )

      return totalPrice;
    },
  },
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2);
    }
  },
})