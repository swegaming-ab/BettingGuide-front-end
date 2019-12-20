<template>
    <table class="w100 bxs">
        <tr class="thead">
            <td>Bookmaker</td>
            <td>Languages</td>
            <td>Phone</td>
            <td>Live Chat</td>
            <td>Email</td>
            <td>Social Media/Other</td>
            <td>Opening Hours</td>
        </tr>
        <tr v-for="x in data" :key="x.name">
            <td class="logo" :style="{color: x.color}">
                <img :src="x.logo" alt="">
            </td>
            <td>{{x.customerService.lang}}</td>
            <td>
                <i v-if="x.phone" class="fas fa-phone" :style="{color: x.color}"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
                <i v-if="x.customerService.chat" class="fas fa-comments"></i>
                <i v-else class="fas fa-times"></i>
            </td>
            <td>
            <i v-if="x.customerService.email" class="fas fa-envelope"></i>
            <i v-else class="fas fa-times"></i>
        </td>
            <td>
                <i v-if="x.customerService.media.twitter" class="fab fa-twitter"></i>
                <i v-if="x.customerService.media.facebook" class="fab fa-facebook"></i>
                <i v-if="x.customerService.media.instagram" class="fab fa-instagram"></i>
            </td>
            <td>24/7</td>
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
    // border-radius: 5px;
    padding: 20px!important;
    border-collapse: collapse;
    background: rgb(255,255,255); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(247,247,247,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f7f7f7',GradientType=0 ); /* IE6-9 */
    // max-width: 95%;
    width: 1000px;

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-weight: bold;
    overflow: hidden;
    tr{
        border-top: 1px solid rgba(218, 218, 218, 0.3);
        // border-bottom: 1px solid rgba(218, 218, 218, 0.3);
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
