export const returnLength = {
    computed: {
        returnLength() {
            return this.showLength + ' (' + this.showLength.length + ')';
        }
    }
};