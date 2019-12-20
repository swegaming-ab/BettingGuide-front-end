<template>
    <div class="container flex">
        <div class="col-group header">
            <div class="col">
                <h2 class="f-gray mb-20">F<span class="f-blue bold">.</span>A<span class="f-blue bold">.</span>Q</h2>
                <p>I'm not wearing hockey pads. It was a dog. It was a big dog. It was a dog. It was a big dog. Accomplice? I'm gonna tell them the whole thing was your idea.</p>
            </div>
        </div>

        <div class="col-group content">
            <div class="col">
                <div v-for="q in questions1" :key="q.id" @click="toggle(q.id)" class="q bxs f-gray flex">
                    <p>{{q.q}}</p><i v-if="expand === q.id" class="fas fa-chevron-up"></i><i v-else class="fas fa-chevron-down"></i>
                    <div v-if="expand === q.id" class="a f-gray">
                        <p>{{q.a}}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div v-for="q in questions2" :key="q.id" @click="toggle(q.id)" class="q f-gray bxs flex">
                    <p>{{q.q}}</p><i v-if="expand === q.id" class="fas fa-chevron-up"></i><i v-else class="fas fa-chevron-down"></i>
                    <div v-if="expand === q.id" class="a f-gray">
                        <p>{{q.a}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        extends: {},
        props: {},
        components: {},
        data(){
            return{
                expand: false,
                questions1: [
                    {
                        id: 1,
                        q: 'Why is this not a question?',
                        a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    },
                    {
                        id: 2,
                        q: 'Why is this not a question?',
                        a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    },
                    {
                        id: 3,
                        q: 'Why is this not a question?',
                        a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    },
                    {
                        id: 4,
                        q: 'Why is this not a question?',
                        a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    }
                ],
                questions2: [
                    {
                        id: 5,
                        q: 'Why is this not a question?',
                        a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    },
                    {
                        id: 6,
                        q: 'Why is this not a question?',
                        a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    },
                    {
                        id: 7,
                        q: 'Why is this not a question?',
                        a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    },
                    {
                        id: 8,
                        q: 'Why is this not a question?',
                        a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    }
                ]
            }
        },
        methods: {
            toggle(id){
                if(this.expand !== id){
                    this.expand = id
                } else {
                    this.expand = false
                }
            }
        },
        beforeMount(){}
    }
</script>
<style lang="scss" scoped>
.container{
    background: #f7f7f7;
    width: calc(100% - 20px);
    padding: 40px 10px;
    @media only screen and (min-width: 1200px) {
        padding: 80px 0;
        width: 100%;
    }
}
.header{
    width: 100%;
    max-width: 800px;
    text-align: center;
    @media only screen and (min-width: 1200px) {
        width: 50%;
    }
}
.content{
    width: 95%;
    margin-top: 40px;
    align-items: flex-start;
    @media only screen and (min-width: 768px) {
        .col{width: 50%;}
    }
    @media only screen and (min-width: 1200px) {
        width: 60%;
    }
}


h2{width: 100%;}
p{width: 100%;}
.flex2{flex: 2;}
.q{
    cursor: pointer;
    border-radius: 3px;
    border-left: 5px solid #509bf5;
    width: 100%;
    background: #fff;
    margin: 5px;
    padding: 15px;
    transition: .2s ease-in-out;
    p{margin: 0; width: 97%; font-size: 16px;}
    i{width: 3%; color: #509bf5;}
    .a{
        color: #595959;
        width: calc(100%);
        padding-top: 10px;
        margin-top: 10px;
        p{width: 100%; font-size: 14px;}
    }
}
</style>
