class hw{
    constructor(){
        this.name="黄威";
        this.age="27";
        this.sex="man";
    }
    sum(){
        console.log("class 互相调用");
        return this.name;
    }
    transfer(){
        this.sum();
    }
}
const proess = new hw();
export default proess;