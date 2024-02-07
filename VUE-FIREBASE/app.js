const app = Vue.createApp({
  //data,functions,component template

  //   template: "<h2>i am template</h2>",
  data() {
    return {
      showBox: true,
      title: "The Final empire",
      age: 24,
      x: 0,
      y: 0,
      books: [
        {
          id: 1,
          title: "The Empire Strikes Back",
          author: "patrick rothfuss",
          img: "./assets/1.png",
          isFav: true,
        },
        {
          id: 2,
          title: "The Empire Strikes Back 2",
          author: "patrick rothfuss 2",
          img: "./assets/2.png",
          isFav: false,
        },
        {
          id: "3",
          title: "The Empire Strikes Back 3",
          author: "patrick rothfuss 3",
          img: "./assets/3.png",
          isFav: true,
        },
      ],
      url: "www.google.com",
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = "new Title"
      this.title = title;
    },
    increaseAge() {
      this.age += 10;
    },
    toggleBtn() {
      this.showBox = !this.showBox;
    },
    handleEvents(e, data) {
      console.log("events", e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handleBg(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((itm) => itm.isFav);
    },
  },
});

app.mount("#app");
