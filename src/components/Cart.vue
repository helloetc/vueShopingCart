<template>
    <div>
<!--        <el-table-->
<!--                :data="tableData"-->
<!--                border-->
<!--                style="width: 100%">-->
<!--            <el-table-column-->
<!--                    fixed-->
<!--                    prop="production"-->
<!--                    label="商品名称">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="price"-->
<!--                    label="单价">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="des"-->
<!--                    label="描述">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="number"-->
<!--                    label="数量">-->
<!--            </el-table-column>-->

<!--            <el-table-column-->
<!--                    fixed="right"-->
<!--                    label="操作">-->
<!--                <template slot-scope="scope">-->
<!--                    <el-button type="success" @click="add(scope.$index)" icon="el-icon-circle-plus" circle></el-button>-->
<!--                    <el-button type="danger" @click="sub(scope.$index)" icon="el-icon-remove" circle></el-button>-->
<!--                </template>-->
<!--            </el-table-column>-->
<!--        </el-table>-->
<!--        <h1>总数等于{{ total }}</h1>-->
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data:function(){
            return {
                tableData: [{}],

            }
        },
        methods:{

        },
        beforeMount() {

        }
    }
</script>

<style scoped>

</style>
