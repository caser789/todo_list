var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');

var ListContainer = React.createClass({

    getInitialState: function() {
        return {
            list:  [
                'nihao',
                'xuejiao',
                'hehe'
            ]
        }
    },

    handleAddItem: function(value) {
        this.state.list.push(value);
        this.forceUpdate();
    },

    handleRemove: function(index) {
        alert(this.state.list.splice(index, 1));
        this.forceUpdate();
    },

    render: function() {
        return (
            <div className="col-sm-6 col-md-offset-3">
                <div className="col-sm-12">
                    <h3 className="text-center"> TODO List </h3>
                    <AddItem add={this.handleAddItem} />
                    <List 
                        items={this.state.list} 
                        remove={this.handleRemove} 
                    />
                </div>
            </div>
        )
    }
});

module.exports = ListContainer;
