<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="production"
                    label="商品名称">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="单价">
            </el-table-column>
            <el-table-column
                    prop="des"
                    label="描述">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="数量">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="success" @click="add(scope.$index)" icon="el-icon-circle-plus" circle></el-button>
                    <el-button type="danger" @click="sub(scope.$index)" icon="el-icon-remove" circle></el-button>
                </template>
            </el-table-column>
        </el-table>
        <h1>总数等于{{ total }}</h1>
        <el-table
                :data="cartTableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="production"
                    label="商品名称">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="单价">
            </el-table-column>
            <el-table-column
                    prop="des"
                    label="描述">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="数量">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "List",
        data:function(){
            return {
                // 商品列表
                tableData: [{
                    production: 'PlayStation 5',
                    price: '3000',
                    des: '这是一个游戏机',
                    number:0
                },{
                    production: '宇宙牌钓鱼竿',
                    price: '280000',
                    des: '钓鱼毁一生，玩车穷三代',
                    number:0
                },{
                    production: '初音未来手办',
                    price: '67000',
                    des: '初音未来',
                    number:0
                },],
                total:0,
                // 购物车列表
                cartTableData: [
                //     {
                //     production: '',
                //     price: '',
                //     des: '',
                //     number:null
                // }
                ],

            }
        },
        methods:{
            add(res){
                // console.log(res)
                //  res是商品列表的index
                this.tableData[res].number ++;


                this.cartTableData[res] = this.tableData[res];
                //  把对象转化成字符串
                //  浅拷贝
                this.cartTableData = JSON.parse(JSON.stringify(this.cartTableData));
                this.resTotal();
                // console.log(this.cartTableData);
            },
            sub(res){
                if(this.tableData[res].number == 0)
                    return
                this.tableData[res].number --;

                this.cartTableData[res] = this.tableData[res];
                //  把对象转化成字符串
                //  浅拷贝
                this.cartTableData = JSON.parse(JSON.stringify(this.cartTableData));
                this.resTotal();
                // console.log(this.cartTableData);
                this.subTotal();
            },
            resTotal(){
                //  声明一个计数变量
                let num = 0;
                //  遍历数组，把所有的number加起来
                for(let index in this.cartTableData){
                    num = num + this.cartTableData[index].number
                    //  判断购物车列表中的数组中的对象是否有number == 0的情况
                    //  判断购物车列表有没有当前的index
                    //  如果this.cartTableData[index]存在，那么对象转化成布尔值是true，否则是false
                    // if(this.cartTableData[index]){
                        // if(this.cartTableData[index].number == 0){
                            console.log(this.cartTableData[index]);
                    //         //  splice(index,1)
                    //
                    //         this.cartTableData = JSON.parse(JSON.stringify(this.cartTableData.splice(index,1)));
                        // }
                    // }

                }
                this.total = num
            },
            // 如果没有数量就删除元素
            subTotal(){
                for(let index in this.cartTableData){
                   if(this.cartTableData[index].number == 0){
                       this.cartTableData.splice(index,1)
                   } 
                }
            }
        },
        beforeMount() {
            this.resTotal();
        }
    }
</script>

<style scoped>

</style>
