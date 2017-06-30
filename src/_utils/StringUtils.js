class StringUtils {
    static trimToEmpty(value) {
        let result = "";
        if (typeof value === "string" && value.length) {
            result = value.trim();
        }
        return result;
    }

    static isBlank(value) {
        return StringUtils.trimToEmpty(value).length == 0;
    }

    static isNotBlank(value) {
        return !StringUtils.isBlank(value);
    }
}

export default StringUtils;

