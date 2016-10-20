angular.module('technodeApp').controller('roomCtrl', function ($scope, socket) {
    $scope.messages = [];
    socket.emit('getAllMessages');

    socket.on('allMessages', function (messages) {
        $scope.messages = messages;
        console.log($scope.messages);
    });

    socket.on('messageAdded', function (message) {
        $scope.messages.push(message);
    })
});