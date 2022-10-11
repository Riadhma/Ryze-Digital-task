<template>
    <div class="details">
        <FormComponent @dataForm="addOrUpdateItem" :rowToUpdate="rowToUpdate" />
        <div class="data-list mx-auto w-50 mt-4">
            <table class="table">
                <thead>
                    <tr>
                        <th class="text-center" v-for="header in tableHeaders" :key="header"> {{ header}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataList" :key="index">
                        <td>
                            <button class="btn btn-danger btn-sm rounded-1 mr-2" type="button"
                                @click="removeItem(index)" data-toggle="tooltip" data-placement="bottom" title="Remove">
                                x
                            </button>
                            <button class="btn btn-success btn-sm rounded-1" type="button" @click="onEdit(item, index)"
                                data-toggle="tooltip" data-placement="bottom" title="Edit">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                        </td>
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import FormComponent from '@/components/Form.vue'

export default {
    name: 'Details',
    components: {
        FormComponent
    },
    data() {
        return {
            tableHeaders: ['', '#', 'Title', 'Date'],
            dataList: [],
            rowToUpdate: {
                rowIndex: -1,
                data: null
            }
        }
    },
    methods: {
        /* This functions add or update elements in the data list */
        addOrUpdateItem({ title, text, date }, index) {
            if (index == -1) {
                this.dataList.push({
                    title,
                    text,
                    date
                });
            }
            else {
                this.dataList[index].title = title;
                this.dataList[index].text = text;
                this.dataList[index].date = date;
            }
        },

        /* Assign the right data of the selected row to "rowToUpdate" var */
        onEdit(item, index) {
            this.rowToUpdate.rowIndex = index;
            this.rowToUpdate.data = item;
        },

        /* Remove element from the list */
        removeItem(index) {
            this.dataList.splice(index, 1);
        },

    }
}
</script>

<style>
.details {
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>