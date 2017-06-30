import React, {Component} from "react";
import PropTypes from 'prop-types';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import injectProps from "../_utils/decorators/injectProps";
import SequenceUtil from "../_utils/SequenceUtil";

class ProgressBlockingParentWindow extends Component {
    static propTypes = {
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: true
    };

    @injectProps
    render({visible}) {

        if (!visible) {
            return null;
        }

        return <div className="progress-blocking-parent-window">
            <CircularProgress key="progress" id={`progress-blocking-parent-window-${SequenceUtil.getNext()}`} scale={2}/>
        </div>
    }
}

export default ProgressBlockingParentWindow;
