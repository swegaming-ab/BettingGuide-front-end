<template>
    <table class="w100 bxs">
        <tr class="thead">
            <td>Bookmaker</td>
            <td>Sports</td>
            <td>Live Football Betting Options</td>
            <td>Live Cricket Betting Options</td>
            <td>Live Streaming</td>
            <td>Cashout</td>
            <td>Live Betting Margin</td>
        </tr>
        <tr v-for="x in data" :key="x.name">
            <td class="logo" :style="{color: x.color}">
                <img :src="x.logo" alt="">
            </td>
            <td>{{x.markets.sports}}</td>
            <td>{{x.markets.liveFootball}}</td>
            <td>{{x.markets.liveCricket}}</td>
            <td>{{x.markets.liveStream}}</td>
            <td>{{x.markets.cashout}}</td>

            <td>{{x.markets.liveBetting}}</td>
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
            bookies: [
                "Bet365",
                "Royal Panda",
                "LeoVegas",
                "Unibet",
                "888sport",
                "Betway"
            ],
            table: [
                {
                    languages: 20,
                    phone: true,
                    chat: true,
                    email: true,
                    social: ["Twitter", "FB"],
                    hours: "24/7"
                }
            ]
        }
    },
    methods: {},
    beforeMount(){}
}
</script>
<style lang="scss" scoped>
table{
    font-family: niveau-grotesk, sans-serif;
    padding: 20px!important;
    border-collapse: collapse;
    background: rgb(255,255,255); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(247,247,247,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f7f7f7',GradientType=0 ); /* IE6-9 */
    max-width: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-weight: bold;
    overflow: hidden;
    tr{
        border-top: 1px solid rgba(218, 218, 218, 0.3);
    }
    tr:nth-child(even) {
        // background: #f7f7f7;
        // background: rgb(255,255,255);
        // background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(230,235,242,1) 100%);
        // background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(230,235,242,1) 100%);
        // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e6ebf2',GradientType=1 );
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
