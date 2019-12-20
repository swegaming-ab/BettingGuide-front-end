<template>
    <table class="">
        <tr class="thead tc">
            <td>Bookmaker</td>
            <td>Visa</td>
            <td>Mastercard</td>
            <td>Paypal</td>
            <td>Skrill</td>
            <td>Neteller</td>
            <td>MuchBetter</td>
            <td>EcoPayz</td>
            <td>Bank Wire</td>
            <td>AstroPay Card</td>
        </tr>
        <tr v-for="x in data" :key="x">
            <td class="logo" :style="{color: x.color}">
                <img :src="x.logo" alt="">
            </td>
            <td>
                <i v-if="x.license.visa" class="far fa-credit-card f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
                <i v-if="x.license.mastercard" class="far fa-credit-card f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
                <i v-if="x.license.paypal" class="fab fa-paypal f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
                <i v-if="x.license.skrill" class="fas fa-code-branch f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
                <i v-if="x.license.neteller" class="fas fa-code-branch f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
                <i v-if="x.license.muchbetter" class="fas fa-code-branch f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i></td>
            <td>
                <i v-if="x.license.ecopayz" class="fas fa-code-branch f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
                <i v-if="x.license.bankwire" class="fas fa-network-wired f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
                <i v-if="x.license.astropay" class="fas fa-code-branch f-orange" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
        </tr>
    </table>
</template>
<script>
export default {
    extends: {},
    props: {
        data: Array
    },
    components: {},
    data(){
        return{

        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
table{
    position: relative;    
    padding: 20px!important;
    border-collapse: collapse;
    background: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 100%;
    max-width: 100%;
    font-weight: bold;
    overflow: hidden;
    tr{
        border-top: 1px solid rgba(218, 218, 218, 0.3);
        // border-bottom: 1px solid rgba(218, 218, 218, 0.3);
    }
    tr:nth-child(even) {
    }
    td{
        text-transform: capitalize;
        text-align: center;
        border: none;
        padding: 20px 15px; color: #666666; font-size: 14px;
    }
    i{margin: 0 5px;}
    .logo{
        text-align: center; padding: 0px;
        img{
            margin: auto;
            height: 40px;
            width: 100px!important;
            object-fit: contain;
        }
    }
    .thead{
        td{
            color: #666666;
        }
    }
    .fa-times{color: #e60000;}
}
</style>
