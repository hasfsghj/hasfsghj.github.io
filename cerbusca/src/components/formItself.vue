<template>
    <form @submit.prevent="handleSubmit">
        <input type="number" v-model="input1" placeholder="Input 1">
        <input type="number" v-model="input2" placeholder="Input 2">
        <input type="number" v-model="input3" placeholder="Input 3">
        <br>
        <select>
            <option value="true">True</option>
            <option value="false">False</option>

            <div v-if="show">
                <p>jddd</p>
            </div>
        </select>
        <button type="submit">Submit</button>
        <select class="form-select" v-model="chooseOption">
            <option value="Yes">Da</option>
            <option value="No">Nu</option>
        </select>
        <div v-if="chooseOption === 'Yes'">
            <a>This is Option1</a>
        </div>
    </form>
</template>

<script>

export default {
    data() {
        return {
            chooseOption: null,
            input1: '',
            input2: '',
            input3: '',
            inputsArray: []
        }
    },
    methods: {

        handleSubmit() {
            const entry = {
                input1: this.input1,
                input2: this.input2,
                input3: this.input3
            }
            this.inputsArray.push(entry)
            console.log(this.inputsArray)
        }
    }
}
</script>