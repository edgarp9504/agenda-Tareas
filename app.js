const vue = new Vue({
    el: '#app',
    data:{
        titulo:'Hola desde vue',
        tareas:[],
        nuevaTarea: '',
        nuevaHora:'',
        fondoCheckout: 'alert alert-primary'

        
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea, 
                tiempo:this.nuevaHora,
                checkOut: false
            })
            this.nuevaTarea = '';
            this.nuevaHora = '';
        },
        checkOutclick(index){
            this.tareas[index].checkOut = !this.tareas[index].checkOut
        },
        eliminarlist(index){
            this.tareas.splice(index, 1)
        }

    },
    computed:{
        sumarHoras(){
            return this.tareas.reduce((a , b) => a + parseInt(b.tiempo),0)
        },
        sumarTareas(){
            return this.tareas.length
        },
        sumarTareasHechas(){
            return  this.tareas.filter((x,i) => { return x.select; }).length;
        }
    }

})