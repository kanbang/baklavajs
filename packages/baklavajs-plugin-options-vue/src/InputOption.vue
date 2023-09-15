

<template>
    <div class="dark-num-input">
        <div v-if="!editMode" class="__content" @click="enterEditMode">
            <div class="__label .text-truncate">{{ name }}</div>
            <div class="__value">{{ value }}</div>
        </div>
        <div v-else class="__content">
            <input type="text" v-model="tempValue" class="dark-input" ref="input" @blur="leaveEditMode"
                @keydown.enter="leaveEditMode" style="text-align: right;">
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";


@Options({
    emits: ["input"]
})

export default class InputOption extends Vue {

    @Prop({ type: String, default: "" })
    value!: string;

    @Prop({ type: String })
    name!: string;

    editMode = false;
    tempValue = "";

    get listeners(): any {
        return { ...this.listeners, input: (ev: any) => this.$emit("input", ev.target.value) };
    }

    setValue(newValue: String) {
        this.$emit("input", newValue);
    }

    async enterEditMode() {
        this.editMode = true;
        this.tempValue = this.value
        await this.$nextTick();
        (this.$refs.input as HTMLElement).focus();
    }

    leaveEditMode() {
        this.$emit("input", this.tempValue);
        this.editMode = false;
    }
}


</script>