
const DelayTimeForUnitAndStructureComponent = 0;
Vue.component('gear-input-detail', function (resolve, reject) {
    setTimeout(function () {
        // resolve コールバックにコンポーネント定義を渡します
        resolve({
            props: ['value'],
            template: "#gear-input-detail-template"
        })
    }, DelayTimeForUnitAndStructureComponent)
});

Vue.component('gear-detail', function (resolve, reject) {
    setTimeout(function () {
        // resolve コールバックにコンポーネント定義を渡します
        resolve({
            props: ['value'],
            template: "#gear-detail-template"
        })
    }, DelayTimeForUnitAndStructureComponent)
});


// select2 を使うためのVueコンポーネント
Vue.component('select2', {
    template: '<select><slot></slot></select>',
    props: {
        options: Array,
        value: Number,
    },

    mounted: function () {
        $(this.$el)
            // init select2
            .select2({ data: this.options })
            .val(this.value)
            .trigger('change')
            .on('change', (event) =>
                this.$emit('input', parseInt(event.target.value, 10))
            )
    },
    watch: {
        value: function (val) {
            $(this.$el).val(val).trigger('change');
        },
        // update options
        options: function (options) {
            let value = this.value;
            $(this.$el)
                .empty()
                .select2({ data: options })
                .val(value)
                .trigger('change');
        }
    },
    destroyed: function () {
        $(this.$el).off().select2('destroy')
    },
});
