<template>
    <div>
        <div class="data-row" v-bind:style="getTopPosition(top)"></div>
        <input type="checkbox" class="checkbox" v-bind:style="getTopPosition(initialCheckboxPosition)">
        <template v-if="doesNameExist(data)">
            <div class="icon" v-bind:style="getTopPosition(initialIconPosition)"></div>
            <div class="initials" v-bind:style="getTopPosition(initialsPosition)">{{data|getInitials}}</div>
            <div class="data-name" v-bind:style="getTopPosition(initialDataPosition)">{{data|formatName}}</div>
        </template>
        <template v-else>
            <img class="no-user-image" v-bind:style="getTopPosition(initialIconPosition)"
                 src="../../public/no_user.png">
            <div class="data-no-name" v-bind:style="getTopPosition(initialDataPosition)">{{data|formatName}}</div>
        </template>
        <div class="data-email" v-bind:style="getTopPosition(initialDataPosition)">{{data.email}}</div>
        <div class="data-account" v-bind:style="getTopPosition(initialDataPosition)">{{data|getOrgName}}</div>
        <div class="data-phone" v-bind:style="getTopPosition(initialDataPosition)">{{data|getPhone}}</div>
    </div>
</template>

<script>
    export default {
        name: "DataRow",
        props: {
            data: {
                required: true,
                type: Object
            },
            top: {
                required: true,
                type: Number,
            },
            initialDataPosition: {
                required: true,
                type: Number,
            },
            index: {
                required: true,
            },
            initialCheckboxPosition: {
                required: true,
            },
            initialsPosition: {
                required: true,
            },
            initialIconPosition: {
                required: true,
            },
        },
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            //this.displayData();
        },
        filters: {
            formatName(value) {
                if (value.firstName != '' && value.lastName != '') {
                    return value.firstName + ' ' + value.lastName;
                } else {
                    return '--';
                }
            },
            getInitials(value) {
                if (value.firstName != '' && value.lastName != '') {
                    return value.firstName[0] + value.lastName[0];
                } else {
                    return null;
                }
            },
            getOrgName(value) {
                if (value.orgname != '') {
                    return value.orgname;
                } else {
                    return '--';
                }
            },
            getPhone(value) {
                if (value.phone != '') {
                    let phone = value.phone;
                    return phone.replace(/[^0-9]/g, '')
                        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                } else {
                    return '--';
                }
            },
        },
        methods: {
            doesNameExist(contact) {
                if (contact.firstName != '' && contact.lastName != '') {
                    return true;
                } else {
                    return false;
                }
            },
            getTopPosition(top) {
                let topPosition = top;
                if (this.index !== 0) {
                    topPosition = top + (this.index * 45);
                }

                return {
                    'top': topPosition + 'px',
                }
            }
        }
    }
</script>

<style scoped>
    .data-row {
        position: absolute;
        width: 888px;
        height: 46px;
        left: 54px;
        top: 94px;

        /* white */

        background: #FFFFFF;
        /* slate-200 */

        border: 1px solid #CED3E0;
        box-sizing: border-box;
    }

    .checkbox {
        position: absolute;
        left: 66px;
        top: 111px;
        bottom: 71.53%;

        /* White 100 - FFFFFF */

        background: #FFFFFF;
        /* Slate 40 - CED3E0 */

        border: 1px solid #CED3E0;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .initials {
        position: absolute;
        left: 98px;
        width: 12px;
        height: 16px;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        line-height: 16px;

        /* Slate 120 - 1F2129 */

        color: #1F2129;
    }

    .data-phone {
        position: absolute;
        width: 105px;
        height: 16px;
        left: 749px;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */


        /* slate-400 */

        color: #5F667E;
    }

    .data-account {
        position: absolute;
        width: 105px;
        height: 16px;
        left: 523px;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */


        /* Slate 120 #1F2129 */

        color: #1F2129;
    }

    .data-no-name {
        position: absolute;
        width: 147px;
        height: 16px;
        left: 147px;
        top: 25%;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */


        /* slate-600 */

        color: #1F2129;
    }

    .data-name {
        position: absolute;
        width: 147px;
        height: 16px;
        left: 122px;
        cursor: pointer;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */


        /* ocean-500 */

        color: #356AE6;
    }

    .data-email {
        position: absolute;
        width: 132px;
        height: 16px;
        left: 313px;
        cursor: pointer;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */


        /* ocean-500 */

        color: #356AE6;
    }

    .no-user-image {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 94px;
        top: 22%;
    }

    .icon {
        position: absolute;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        left: 94px;
        /* Purple 40 - EAE0FE */

        background: #EAE0FE;
    }
</style>