const date = new Date();
const app=Vue.createApp(
    {
        data(){
            return{
                today:date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear(),
                tasks:[]
            }
        },
        created(){
            this.tasks= JSON.parse(localStorage.getItem("tasks"))??[];
        },
        methods: {
            addTask(name){
                this.tasks.push(name);
                localStorage.setItem("tasks",JSON.stringify(this.tasks));
            },
            clear(){
                this.tasks=[];
                localStorage.setItem("tasks",JSON.stringify([]));
            }
        }
        
    }
);

app.mount('#app');