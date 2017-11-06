import { Component } from 'react';
import PropTypes from 'prop-types';

class BodyAttribute extends Component {

	static propTypes = {
    	classAttr: PropTypes.string
	}
	
  	static defaultProps = {
    	classAttr: 'basic'
	}
	
	componentDidMount() {
    document.body.classList.toggle(this.props.classAttr, this.props.classAttr)
	}
	
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle(this.props.classAttr, nextProps.classAttr)
	}
	
  componentWillUnmount() {
    document.body.classList.remove(this.props.classAttr)
	}
	render() {
		return this.props.children;
	}
}

export default BodyAttribute;