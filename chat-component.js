var ChatApp = window.React.createClass({
    render: function(){
        return (
            <div>
                This will be the chat app
            </div>
        )
    }
});

   window.ReactDOM.render(
       <ChatApp />,
        document.getElementById("chat")
);

