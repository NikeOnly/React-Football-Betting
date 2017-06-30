function setPopupCloseTrigger(popup, popupClosedCallback, checkPeriod = 500) {
    if (!popup.closed) {
        setTimeout(function () {
            setPopupCloseTrigger(popup, popupClosedCallback, checkPeriod);
        }, checkPeriod);
    } else if (popupClosedCallback) {
        popupClosedCallback();
    }
}

class VanillaUtils {

    static openCenteredPopup(url, title, maxWidth, maxHeight) {
        // Fixes dual-screen position                         Most browsers      Firefox
        const dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        const dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        const width = window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width);
        const height = window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height);

        const popupWidth = Math.min(width, maxWidth);
        const popupHeight = Math.min(height, maxHeight);

        const left = ((width / 2) - (popupWidth / 2)) + dualScreenLeft;
        const top = ((height / 2) - (popupHeight / 2)) + dualScreenTop;

        const newWindow = window.open(url, title, `width=${popupWidth}, height=${popupHeight}, top=${top}, left=${left}, scrollbars=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no`);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }

        return newWindow;
    }

    static openAuthPopup(url, title, popupClosedCallback) {
        const authPopup = VanillaUtils.openCenteredPopup(url, title, 1100, 620);
        setPopupCloseTrigger(authPopup, popupClosedCallback);
    }

}

export default VanillaUtils;

