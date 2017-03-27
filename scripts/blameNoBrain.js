module.exports = function(robot){
  var blamePeople = ['Robbie', 'Rebekah', 'Caleb', 'Geoff', 'Khai', 'Todd', 'Luke', 'Josh', 'Brian'];

    robot.hear('addBlamePerson (.*)', function(msg){
      let blamePerson = msg.match[1];
      blamePeople.push(blamePerson);
    });

    robot.hear('removeBlamePerson (.*)', function(msg){
      let blamePerson = msg.match[1];
      for (let i=blamePeople.length-1; i>=0; i--) {
        if (blamePeople[i] === blamePerson) {
          blamePeople.splice(i, 1);
          break;
        }
      }
    });

    robot.hear('blame', function(msg){
      msg.send('Blame ' + msg.random(blamePeople));
    });

    robot.hear('sorry', function(msg){
      msg.send('Blame ' + msg.random(blamePeople));
    });

    robot.hear('fault', function(msg){
      msg.send('Blame ' + msg.random(blamePeople));
    });

    robot.hear('listBlamePeople', function(msg){
      msg.send(blamePeople);
    });
};
