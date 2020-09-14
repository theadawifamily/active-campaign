<template>
    <div>
        <div id="table-header"></div>
        <input @click="changeCheckBoxStatus" type="checkbox" class="checkbox">
        <div class="name">Name</div>
        <div class="email">Email</div>
        <div class="account">Account</div>
        <div class="phone">Phone number</div>
    </div>
</template>

<script>
    export default {
        name: "TableHeader",
        data() {
            return {
                checkBoxEnabled: false,
            }
        },
        methods: {
            /**
             * Changes checkbox status and adds a listener for the parent component
             */
            changeCheckBoxStatus() {
                this.checkBoxEnabled = !(this.checkBoxEnabled);
                this.$emit('getCheckboxStatus', this.checkBoxEnabled);
            },
        },
    }
</script>

<style scoped>
    #table-header {
        position: absolute;
        width: 888px;
        height: 28px;
        left: 54px;
        top: 67px;

        /* white */

        background: #FFFFFF;
        border: 1px solid #CED3E0;
        box-sizing: border-box;
    }

    .phone {
        position: absolute;
        width: 106px;
        height: 16px;
        left: 749px;
        top: 72px;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #5F667E;
    }

    .account {
        position: absolute;
        width: 91px;
        height: 16px;
        left: 523px;
        top: 72px;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #5F667E;
    }

    .email {
        position: absolute;
        width: 41px;
        height: 16px;
        left: 313px;
        top: 72px;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #5F667E;
    }

    .name {
        position: absolute;
        width: 65px;
        height: 16px;
        left: 94px;
        top: 72px;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #5F667E;
    }

    .checkbox {
        position: absolute;
        left: 6.62%;
        right: 92.18%;
        top: 13.4%;

        /* White 100 - FFFFFF */

        background: #FFFFFF;

        border: 1px solid #CED3E0;
        box-sizing: border-box;
        border-radius: 4px;
    }
</style>