import moment from 'moment';


class DateTimeUtils {

    static formatDate(datetime, dateFormat = "MMM DD, YYYY") {
        if (!datetime) {
            return "";
        }
        return moment(+datetime).format(dateFormat);
    }
}

export default DateTimeUtils;
