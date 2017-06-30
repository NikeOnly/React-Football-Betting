class RegExpUtils {

    static EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    static PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    static isValidEmail(email) {
        return RegExpUtils.EMAIL.test(email);
    }

    static isValidPassword(password) {
        return RegExpUtils.PASSWORD.test(password);
    }
}

export default RegExpUtils;
