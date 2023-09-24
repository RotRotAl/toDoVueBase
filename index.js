const date = new Date();
const app=Vue.createApp(
    {
        data(){
            return{
                today:date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear(),
                tasks:[]
            }
        },
        methods: {
            addTask(name){
                this.tasks.push(name);
            },
        }
        
    }
);

app.mount('#app');