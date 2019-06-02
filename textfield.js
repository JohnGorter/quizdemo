class TextField extends React.Component {
    constructor(){
        super();
        this.state = { value:''}
    }
    render(){
        return (<div>
            <div>{ this.props.question }</div>
            <input type="text" value={this.state.value} onChange={(event) => { this.setState({value:event.target.value})}} />
            <button onClick={() => {this.props.setResult(this.state.value)}}>Save</button>
          
        </div>);
    }
}

TextField.propTypes = {}
