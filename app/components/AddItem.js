var React = require('react');

var AddItem = React.createClass({

    getInitialState: function(){
        return {
        inputText: 'New Item'
        }
    },

    handleChange: function(e){
        this.setState({
            inputText: e.target.value
        })
    },

    handleSubmit: function(e){
        if(e.keyCode===13){
            var newItem = e.target.value;
            this.setState({
                inputText: ''
            });
            this.props.add(newItem);
        }
    },

    render: function() {
        return (
            <div>
                <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.inputText} 
                    onKeyDown={this.handleSubmit}
                    onChange={this.handleChange} />
            </div>

        )
    }
});

module.exports = AddItem;
