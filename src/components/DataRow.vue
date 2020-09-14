<template>
    <div>
        <div class="data-row" v-bind:style="getTopPosition(top)"></div>
        <input v-model="checkboxValue" @click="preventThisClickEvent" type="checkbox" class="checkbox"
               v-bind:style="getTopPosition(initialCheckboxPosition)">
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
        data() {
            return {
                defaultTopPosition: 45,
            }
        },
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
                type: Number,
            },
            initialCheckboxPosition: {
                required: true,
                type: Number,
            },
            initialsPosition: {
                required: true,
                type: Number,
            },
            initialIconPosition: {
                required: true,
                type: Number,
            },
            checkboxValue: {
                type: Boolean
            },
        },

        filters: {
            /**
             * Returns contact's full name if both first and last names exist
             * Defaults to "--"
             * @param value
             * @returns {string}
             */
            formatName(value) {
                if (Object.keys(value.firstName).length > 0 && Object.keys(value.lastName).length > 0) {
                    return value.firstName + ' ' + value.lastName;
                } else {
                    return '--';
                }
            },

            /**
             * Returns initials based on first and last names
             * Defaults to null
             * @param value
             * @returns {string}
             */
            getInitials(value) {
                if (Object.keys(value.firstName).length > 0 && Object.keys(value.lastName).length > 0) {
                    return value.firstName[0].toUpperCase() + value.lastName[0].toUpperCase();
                } else {
                    return '';
                }
            },

            /**
             * Returns contact's organization if it exists
             * Defaults to "--"
             * @param value
             * @returns {string}
             */
            getOrgName(value) {
                if (Object.keys(value.orgname).length > 0) {
                    return value.orgname;
                } else {
                    return '--';
                }
            },

            /**
             * Returns contact's phone if it exists
             * Defaults to "--"
             * @param value
             * @returns {string}
             */
            getPhone(value) {
                if (Object.keys(value.phone).length > 0) {
                    let phone = value.phone;
                    return phone.replace(/[^0-9]/g, '')
                        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                } else {
                    return '--';
                }
            },
        },
        methods: {
            /**
             * Prevents a checkbox from being checked/unchecked.
             * This is needed because as part of the requirements, we can only check/uncheck checboxes from the
             * row header checkbox only.
             * @param e
             */
            preventThisClickEvent(e) {
                e.preventDefault();
            },
            /**
             * Checks if a name does exist
             * @param contact
             * @returns {boolean}
             */
            doesNameExist(contact) {
                if (Object.keys(contact.firstName).length > 0 && Object.keys(contact.lastName).length > 0) {
                    return true;
                } else {
                    return false;
                }
            },
            /**
             * Returns proper position for a DOM element based on index
             * @param top
             * @returns {{top: string}}
             */
            getTopPosition(top) {
                let topPosition = top;
                if (this.index !== 0) {
                    topPosition = top + (this.index * this.defaultTopPosition);
                }

                return {
                    'top': topPosition + 'px',
                }
            },
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
        left: 97px;
        width: 12px;
        height: 16px;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        line-height: 16px;
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
        color: #1F2129;
    }

    .data-no-name {
        position: absolute;
        width: 147px;
        height: 16px;
        left: 122px;
        top: 25%;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
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