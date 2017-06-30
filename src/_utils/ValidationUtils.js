import StringUtils from "./StringUtils";
import RegExpUtils from "./RegExpUtils";

class ValidationUtils {

    static EMAIL_VALIDATION_ERROR_CODE_TO_MSG = {
        BLANK_VALUE: "Can't be blank",
        NOT_VALID_VALUE: "Please enter a valid email address."
    };

    static PASSWORD_VALIDATION_ERROR_CODE_TO_MSG = {
        BLANK_VALUE: "Can't be blank",
        NOT_VALID_VALUE: "Please enter a password with at least 6 characters, 1 Uppercase Alphabet, 1 Lowercase Alphabet and 1 Number."
    };

    static getEmailValidationError(email, validationCodeToMsg) {
        const validationErrors = {...ValidationUtils.EMAIL_VALIDATION_ERROR_CODE_TO_MSG, ...(validationCodeToMsg || {})};

        if (StringUtils.isBlank(email)) {
            return validationErrors.BLANK_VALUE;
        }

        if (!RegExpUtils.isValidEmail(email.trim())) {
            return validationErrors.NOT_VALID_VALUE;
        }

        return null;
    }

    static getPasswordValidationError(password, validationCodeToMsg) {
        const validationErrors = {...ValidationUtils.PASSWORD_VALIDATION_ERROR_CODE_TO_MSG, ...(validationCodeToMsg || {})};

        if (StringUtils.isBlank(password)) {
            return validationErrors.BLANK_VALUE;
        }

        if (!RegExpUtils.isValidPassword(password.trim())) {
            return validationErrors.NOT_VALID_VALUE;
        }

        return null;
    }
}

export default ValidationUtils;
