new Vue({
    el: "#app",
    data: {
        title: "Rafee",
        isItTrue: true,
        cars: ['Ford', 'Toyota'],
        robot: {
            name: "Franky"
        },
        greeting: () => {
            return "Hello world"
        }
    }
}) ;