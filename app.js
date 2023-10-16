/*new Vue({
    el: "#app",
    data: {
        title: "Rafee",
        isItTrue: true,
        cars: ['Ford', 'Toyota'],
        robot: {
            name: "Franky"
        },
        // greeting: () => {
        //     return "Hello world"
        // }
    },
    methods: {
        greeting() {
          return this.title
         }
    }
}) ;*/

/*new Vue({
    el: "#app",
    data: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "this is a dog",
        link: "http://google.com",
        myText: "Hello Luffy",
        myHtml: "<strong>Hello Nami</strong>"
    }
});*/

/*new Vue ({
    el: "#app",
    data:{
        user: "Luffy",
        userAge: 16,
        allowedAge: 18
    },
    methods: {
        changeUser(){
        return this.user ==="Luffy" ? true : false;
        }
    }
});*/

/*new Vue({
    el: "#app",
    data: {
        cars: ['BMW', 'Ford', 'Toyota'],
        user: {
            name: 'Luffy',
            age: 20,
            country:'Japan',
        }
    }
});*/

/*new Vue ({
    el: "#app",
    data: {
        name: "Puja"
    },
    methods:{
        update(){
            setTimeout(() => {
                this.name = 'Nitesh'
            }, 2000);
        },
    }
});*/

/*new Vue({
    el: "#app",
    data:{
        name: "Puja",
        x: 0,
        y: 0,
    },
    methods:{
        updateName(){
            this.name = "Nitesh";
        },
        getCoord(){
            this.x = event.clientX;
            this.y = event.clientY
        }

    },
});*/

/*new Vue({
  el: "#app",
  data: {
    name: 'Puja'
  },
  methods: {
    updateName(newname,event){
        this.name = newname;
        console.log(event);
    },
    handleform(){
        console.log("submit form");
    }
  }
});*/

/*new Vue({
    el: "#app",
    data: {
        formData:{
            firstName: '',
            lastName: '',
        }
    },
    methods: {
      handleform(){
          console.log(this.formData);
      }
    }
  });*/

/*new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0,
        salary: 10
    },
   
        computed: {
            addToA(){
                console.log("add a");
                return this.a + this.salary;
            },
            addToB(){
                console.log("add b");
                return this.b + this.salary;
            },
        } 
});*/

/*new Vue ({
    el: "#app",
    data: {
        a: 0,
        link: "http://google.com",
        name: ''
    }
});*/

//Create More Instance
/*const app1 = new Vue({
    el: "#app1",
    data: {
        value: "1st"
    },
    methods: {
        changeValue(){
            app2.value = 'changed';
        }
    },
});
const app2 = new Vue({
    el: "#app2",
    data: {
        value: "2nd"
    }
});*/

//Mount & Template
/*const temp =  `<p>My name is {{name}}</p>`;
 const app1 = new Vue ({
   // el: "#vue-app",
    data:{
        name: "Puja"
    },
    template: temp
});
setTimeout(() => {
        app1.$mount('#vue-app')
}, 2000);*/

//Use of Basic Component 
Vue.component('rafee', {
   data(){
    return {
        name: 'Luffy'
    }
   },
    template: `<p>{{name}}</p>`
});

new Vue({
    el: "#app-tem",
});





