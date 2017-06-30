import React, {Component} from "react";
import PropTypes from 'prop-types';
import LinearProgress from "react-md/lib/Progress/LinearProgress";
import injectProps from "../_utils/decorators/injectProps";

import SequenceUtil from "../_utils/SequenceUtil";

class ProgressBlockingParentWindow extends Component {
    static propTypes = {
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: true
    };

    componentWillMount() {
        this.componentId = SequenceUtil.getNext();
    }

    @injectProps
    render({visible, className, ...restProps}) {

        if (!visible) {
            return null;
        }

        const progressLabel = `linear-progress-${this.componentId}`;

        return <LinearProgress {...restProps}
                               id={progressLabel}
                               key={progressLabel}
                               className={`linear-progress-primary ${className || ""}`}
        />
    }
}

export default ProgressBlockingParentWindow;
