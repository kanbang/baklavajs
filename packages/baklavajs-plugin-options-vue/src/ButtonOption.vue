<!--
 * @Descripttion: 
 * @version: 0.x
 * @Author: zhai
 * @Date: 2023-06-25 09:46:31
 * @LastEditors: zhai
 * @LastEditTime: 2023-06-26 08:42:34
-->
<template>
    <button @click="$emit('openSidebar')" class="dark-button --block">{{ name }}</button>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";

@Options({
    emits: ["openSidebar"],
})
export default class ButtonOption extends Vue {
    @Prop({ type: String })
    name!: string;
}
</script>
