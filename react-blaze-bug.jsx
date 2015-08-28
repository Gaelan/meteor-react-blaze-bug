if (Meteor.isClient) {
  class ReactComponent extends React.Component {
    render() {
      return <div>Hi from React!</div>;
    }
  }

  Session.setDefault('showReact', true);

  UI.body.helpers({
    showReact: function () {
      return Session.get('showReact');
    },
    ReactComponent: function () {
      return ReactComponent;
    }
  });

  UI.body.events({
    'click button.blaze': function () {
      Session.set('showReact', false);
    },
  });
}
