export default {
    emits: ['update:modelValue'],
    computed: {
        attrs() {
            const attrs = {...this.$attrs};
            delete attrs['class'];
            delete attrs['style'];
            return attrs;
        },
        inputValue: {
            get() {
                return this.attrs['modelValue'];
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
}
