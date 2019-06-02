class YesNo extends React.Component {
    render(){
        return (<div>
            <div>{ this.props.question }</div>
            <button onClick={() => {this.props.setResult(1)}}>YES</button>
            <button onClick={() => { this.props.setResult(0)}}>MAYBE</button>
            <button onClick={() => {this.props.setResult(2)}}>NO</button>
        </div>);
    }
}

YesNo.propTypes = {}
