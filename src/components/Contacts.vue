<template>
    <div class="container">
        <TableHeader
                @getCheckboxStatus="checkboxStatus=$event">
        </TableHeader>
        <div v-for="(value, key) in data" :key="key">
            <DataRow
                    :data="value"
                    :top=94
                    :initialDataPosition=108
                    :initialCheckboxPosition=109
                    :initialsPosition=109
                    :initialIconPosition=107
                    :index=key
                    :checkboxValue="checkboxStatus"
            >
            </DataRow>
        </div>
    </div>
</template>

<script>
    import TableHeader from './TableHeader';
    import DataRow from './DataRow';

    export default {
        name: "Contacts",
        data() {
            return {
                data: [],
                checkboxStatus: false,
            }
        },
        mounted() {
            this.getData();
        },
        components: {
            TableHeader,
            DataRow,
        },
        methods: {
            getData() {
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Api-Token': 'bfb46188a9baefcc262ff174c8c6357d40a1b139ecc8609f34cac61ba4a62696be42a4ca',
                    }
                };
                this.$http.get("/api/3/contacts?status=-1&orders[email]=ASC", axiosConfig).then((response) => {
                    this.data = response.data.contacts;
                }).catch((error) => {
                    console.error(error)
                });
            },
        }
    }
</script>

<style scoped>
    .container {
        position: relative;
        width: 997px;
        height: 532px;
        right: -19.79%;
        bottom: -218px;
        background: #FFFFFF;
    }
</style>